---
title: Building a Line Follower Robot
---

# {% $markdoc.frontmatter.title %}

**10th May 2014**

Making a line follower robot is for newbies who are interested in robotics and will eventually get the basic idea on how to operate with micro-controllers.

## Equipment's
- Arduino UNO [Micro-controller]
- L293D [Motor Driver]
- IR LED's [Infrared Light Emitting Diodes]
- IR Receiver's [Infrared Receivers]
- Resistors
- DC Gear Motors + Wheels
- Batteries (9V/5V)

## Circuit Diagram

[![Untitled Sketch 3_bb.jpg](https://svbtleusercontent.com/2edvkhjyqvamag_small.jpg)](https://svbtleusercontent.com/2edvkhjyqvamag.jpg)

*A strict 9-12 V supply has to be maintained because the Arduino has a recommended voltage limit of 9-12 V. So it can get damaged if the supply voltage is more.*

## Sensor Board

We use IR LED and IR Receiver combinations to make the sensor board. The below PCB diagram shows the circuit for one set of LED/Receiver pair. The number of pair's depend on the *complexity* of the line or task that it will perform. For our tutorial, we will use only **three**. The resistor values depend on the readings we get on our micro-controller. Using too high resistor values mean less current which leads to less light from LED and less received light onto receivers and the vice versa for too low resistor value. An appropriate value is chosen by using a variable resistor and varying the resistance for a *good* value of output voltage **Vout**.

[![Untitled Sketch_pcb.jpg](https://svbtleusercontent.com/hamjrelpz1nmq_small.jpg)](https://svbtleusercontent.com/hamjrelpz1nmq.jpg)

## Code

```c
int leftmotor = 13; // Integer indicating the left motor
int rightmotor = 12; //Integer indicating the right motor

// the setup routine runs once when you press reset:
void setup ( ) {
  // initialize serial communication at 9600 bits per second:
  Serial.begin ( 9600 );
}

// the loop routine runs over and over again forever:
void loop ( ) {
  int sensorValueL = analogRead(A0); // reading left sensor
  int sensorValueM = analogRead(A1); // reading middle sensor
  int sensorValueR = analogRead(A2); // reading right sensor

  // Pattern 111 - Robot stops
  if ( ( sensorValueL < 120 ) && ( sensorValueM < 120 ) && ( sensorValueR < 120 ) ) {
    digitalWrite ( leftmotor, LOW ); // left motor stops
    digitalWrite ( rightmotor, LOW ); // right motor stops
  }

  // Pattern 000 - Robot moves straight
  else if ( ( sensorValueL > 120 ) && ( sensorValueM > 120 ) && ( sensorValueR > 120 ) ) {
    digitalWrite ( leftmotor, HIGH ); // left motor runs
    digitalWrite ( rightmotor, HIGH ); // right motor runs
  }

  // Pattern 010 - Robot moves straight
  else if ( ( sensorValueL > 120 ) && ( sensorValueM < 120) && ( sensorValueR > 120) ) {
    digitalWrite ( leftmotor, HIGH ); //left motor runs
    digitalWrite ( rightmotor, HIGH ); //right motor runs
  }

  // Pattern 110 OR 100 - Robot turns left
  else if ( ( sensorValueL < 120 ) && ( sensorValueR > 120 ) ) {
    // Runs for loop until the middle sensor detects the black line
    for ( ; ! ( sensorValueM < 120) ; ) {
      sensorValueM = analogRead ( A1 );
      digitalWrite ( leftmotor, LOW ); //left motor stops
      digitalWrite ( rightmotor, HIGH ); //right motor runs
    }
  }

  // Pattern 011 OR 001 - Robot turns right
  else if ( ( sensorValueR < 120 ) && ( sensorValueL > 120 ) ) {
    // Runs for loop until the middle sensor detects the black line
    for ( ; ! ( sensorValueM < 120 ) ; ) {
      sensorValueM = analogRead ( A1 );
      digitalWrite ( leftmotor, HIGH ); //left motor runs
      digitalWrite ( rightmotor,LOW); //right motor stops
    }
  }
}
```