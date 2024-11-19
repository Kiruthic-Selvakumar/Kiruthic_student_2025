---
layout: post
title: Multiple Choice Reflection
permalink: /mcqreflection/blog
comments: True
toc: true
---

# Multiple Choice Completion(63/66)
<img src="{{site.baseurl}}/images/practicemcq.png">

## What I learned:
This Practice Multiple Choice Exam was a challenge like I have never seen before. It required extensive use of logic, and thinking how exactly each step in each question would change a variable, for example. I had to use my mathematical thinking and problem-solving skills to solve many of the questions. I learned that many questions do not require much textbook knowledge but I have to be very keen on what each line of code means and what it does. So it is important to be observant and understand how each line of code plays out.

## What I feel weak on:
By analyzing the 3 questions I got wrong, it was evident to me that I do not have a clear understanding of encryption and the different types of it, and what role it plays in the internet. I also got a question incorrect about runtime, so I need more practice and need to learn more about different algorithms and how the type of algorithm or the techniques they include can effect the runtime. I also see the common trend that many questions relating to the internet and IP adresses require encryption, and now I realize that this is because when a user is publically sending a message that could contain private information over the internet, this requires various types of encryption that have been found and used over the years.

## Corrections:
<img src="{{site.baseurl}}/images/question43.png">

I got this question incorrect because I did not understand how different operations can have an effect on the runtime, I thought that due to the large number of steps for larger amounts of n, that this would lead to very high runtimes. However, I did not know that as a general rule, if the number of steps of an algorithm can be represented by a polynomial, based on a independent variable that can be controlled such as the number of item,s in this case the polynomial would be n squared, so this algorithm runs in reasonable time, due to its ability to be represented as a polynomial expression.

<img src="{{site.baseurl}}/images/question47.png">

I got this question wrong because prior to taking this practice exam I did not know much about the field of cryptography. I did not understand the question, but however now I understand that the sender does not have access to the recievers private key, so they encrypt it with their public key, but no one else can know about the data being sent, so the recipients private key which is not accessible to anyone is used to decrypt the message.

<img src="{{site.baseurl}}/images/question51.png">

Initially when I read this question, I did not know much about cryptography let alone the symmetric form of it. Now after unpacking the question, I realize that using a bit of reasoning and logic one can determine, that symmetric means the same key is used for decryption and encryption. Answer choice B highlights this because a certain secret key is used to encrypt the message and send it and the same key is used to recieve and decrypt the message, this was not the case with the answer choice I chose, in which multiply keys are used for different purposes that are not symemtrics.