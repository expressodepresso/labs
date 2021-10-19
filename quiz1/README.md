	To start I read through the app documentation. I used an API call rather than 
the downloaded data. I also took the conversion code they gave us. The conversion code they 
gave us was initially set for 10 GBP to USD.  I used string concatenation to make it work for me. 
I passed in my textarea value for the amount and switched the "to" value to whichever currency
was needed for that button.
	For some reason when you first loaded the page and attempted to convert,
the alert message would have weird symbols in it. When I selected all and backspaced
before entering my data then it showed properly. To fix this I just cleared the textarea
on load
	I focused on getting my app functional before applying CSS. Because I was
running short on time I didn't get to do much styling. I learned what a textarea is and
set the seize with row and column. I just manually centered my text area with position 
and used some premade button stylings. I did the same centering with my output div. 
The div was supposed to show the same info as the
alert, but I couldn't get the value to change.

https://www.bestcssbuttongenerator.com/#/36