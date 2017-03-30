<!--
Creator: SF WDI Team - Nathan
Last Edited By: Brianna
Location: SF
-->

![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Training: DOM Events & jQuery

In this training, you'll practice with some of the most common DOM events in jQuery:

- ready
- submit
- change
- click
- keypress


The `.ready` method is specific to jQuery and uses a few native JavaScript event types internally. The other events listed are all native JavaScript events, and we recommend you use them with jQuery's `.on`.

You can find a full list of `event`-related methods in [jQuery's event documentation](http://api.jquery.com/category/events/). For a list of standard JavaScript events, check [MDN's event reference](https://developer.mozilla.org/en-US/docs/Web/Events).

## Instructions:

Fork this repository to your GitHub account, then clone your GitHub copy onto your computer.

* Each event has its own directory with HTML, CSS, and JavaScript files.  Start each event page by opening its HTML file in your browser.  
* Read the descriptions below (and the existing HTML and JavaScript) for each event page. To meet the goals, you'll need to change each JavaScript file. Do not change the HTML files.  
* Make sure to keep your developer console open so that you can check for bugs!  
* Make at least one git commit for each page.  



### `ready`


**Get the page to say "Go!" instead of "Ready?" without changing the HTML.**

<img width="450" alt="ready screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784989/b54a1bdc-6533-11e6-8ca6-abf9a892ff74.png">

<hr>

### `submit`


**Stop the forms from submitting.**

<img width="450" alt="submit" src="https://cloud.githubusercontent.com/assets/3254910/24517308/a01ca2f2-1532-11e7-8d7a-571b5c1d3c44.png">


Try clicking both buttons.  

+ Submitting the "Reload" form currently reloads the page (you can see the "last reload time" change). It also adds a "?" to the URL.

+ The "Fun" form currently redirects to a youtube video.


Hint: Make sure you don't just handle a click for the buttons, because pressing enter/return from the text input boxes also submits the form!


Stretch: Instead of just stopping the forms, make it so that submitting them adds an embedded youtube video to the page.


<hr>


### `change`

<img width="450" alt="change solution screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784718/57714ca2-6532-11e6-90ca-4c161c7aa6ff.png">

**Addition! Get the total to update whenever you update the numbers.**

Stretch: Add a "reset" button that clears all the inputs.



<hr>


### `click`


**Create a list of all the phrases that are clicked.**

<img width="450" alt="click screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17784947/847b6e66-6533-11e6-98db-0e893432ac16.png">


Stretch: In addition to listing the phrase I clicked, can you include a timestamp?



<hr>


### `keypress`

**Make a stop watch!**

<img width="450" alt="keypress screenshot" src="https://cloud.githubusercontent.com/assets/3254910/17785026/e7f1ecfe-6533-11e6-922c-e0481692a1ad.png">

When the user hits spacebar, record their "start" time.

The next time they hit the spacebar again, record their new "end" time.  

Then, calculate the time difference, and display it on the page.

Stretch: update the display to show the time while the clock is running.



<hr>


### Wrap it Up

Recommended: Can you link all the pages together? Create a `<nav>` element on every page, with links to all the other pages.



<hr>
