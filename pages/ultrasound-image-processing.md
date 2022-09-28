---
title: Ultrasound Image Processing
---

# {% $markdoc.frontmatter.title %}

**11th June 2015**

The entire research work is based on a publication by The McConnell Brain Imaging Center(BIC). Raw ultrasound data are available at the [online database](http://www.bic.mni.mcgill.ca/Services/ServicesBITE).

## Reading Raw Data

Raw data provided by the database is in MINC(Medical Image NetCDF) format.

> Details on [MINC](https://en.wikibooks.org/wiki/MINC/History)

Loading the MINC file on MATLAB requires [this function](http://www.mathworks.com/matlabcentral/fileexchange/32644-loadminc/content//loadminc.m).

An alternative method is to extract the MINC file to HDR and IMG. This can be done on Unix shell systems (preferably Mac or Ubuntu). Installation of [this package](http://packages.ubuntu.com/precise/science/minc-tools) is required. In Ubuntu, type this in terminal:

```bash
sudo apt-get install minc-tools
```

Then on terminal, browse to the folder containing the MINC file and running the following command:

```bash
mnc2nii filename.mnc -dual
# replace "filename" with the name of the file
```

After conversion, on MATLAB, run this code:

```matlab
imginfo = analyze75info('filename.img');
img = analyze75read(imginfo);
imshow(img)
% Only replace "filename" with the name of the IMG file
```

## Finding the frame

Objective here is to determine the frame used on the online database to produce the images in Fig. 3 of the publication (Page 3257). That is only for patient 4 and 11. Each of them had around 400 images per sweep angle for 7 sweeps. The fastest method would be to convert them to IMG/HDR's and display them as montage and visually compare. IMG/HDR's preferred over MINC's because IMG's needed lesser code to process and display over MINC's, which means more processing needed for MINC and hence more time would've been needed to display them.

Patient 4 found at Pre - Sweep 4c - Between 350 - 420

[![patient4closenough1.png](https://svbtleusercontent.com/fpap5vjhlsewgg_small.png)](https://svbtleusercontent.com/fpap5vjhlsewgg.png)

Comparing it with the original MINC

[![patient4-img-mnc.png](https://svbtleusercontent.com/yfulx81isuthhg_small.png)](https://svbtleusercontent.com/yfulx81isuthhg.png)

Patient 11 is on progress

## Finding the Nakagami-an Distribution

On Progress