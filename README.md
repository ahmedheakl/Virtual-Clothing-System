# Virtual-Clothing-System
It is a system that helps the user to try on new clothes by using a deep learning model that replaces the user’s clothes with the desired product of his own choice. The system runs on 3 other main parts a website, embedded system using raspberry pi and a mobile application.

**The system is constituted of 4 main parts**:
## Deep Learning and Model Training 
The same architecture as in ACPGN (Adaptively Generating, Preserving Image Content) was used and built with Pytorch. 
The model consists of three modules:
* **Semantic Generation Module** uses the semantic segmentation of body parts and clothes to progressively generate the mask of exposed body parts.
* **Content Wrapping Module** is designed to warp clothes according to the generated semantic layout.
* **Content Fusion Module integrates** the information from the synthesized body part mask, the warped clothing image, and the original body part image to adaptively determine the generation or preservation of the distinct human parts in the synthesized image.

The model uses a complex preprocessing process involving:
* **Body Parsing** using Self-Correction strategy
* **Pose Estimation** using Multi-Stage CNNs
* **Cloth Masking** using U-Net generative model

Pre-trained versions were used and deployed onto a local server to be shared amongst other parts of the system. 

## Full Stack Website for User Interaction
*The website takes an input photo for the user and input photo for the desired cloth. An API request is sent to the local server to run the model with the input data. The data is sent and received in JSON format.* 
The frontend was designed using bootstrap framework, HTML, CSS, and Java Script. We implemented the backend using Django framework along with SQL-Lite for database storage. **Tech Stack: HTML, CSS, Java Script, Django, Python, SQL**

## Embedded System using Raspberry PI
Using a Tkinter GUI, the user can take photo using a web cam and send it over the local host API in JSON format using Python requests library. The incoming image data is encoded in base64 format, which is then decoded and displayed on the GUI. The system was implemented on a raspberry PI. **Tech Stack: Linux, Python, Tkinter**

## Mobile Application
Using React Native framework, a mobile application takes a photo using the mobile camera and send it over the local host API in base64 encoding. The mobile only needs to be connected to the internet and have the IP of the host to work. **Tech Stack: React Native, Java Script, Expo Components**

## Demo 
<p align="center">
  <img height=500 width=400 src="https://github.com/ahmedheakl/Virtual-Clothing-System/blob/main/pbl_mobile_gif.gif"/> 
</p>




