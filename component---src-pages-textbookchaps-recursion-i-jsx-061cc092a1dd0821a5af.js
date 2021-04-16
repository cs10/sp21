(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{pNuN:function(e,t,a){"use strict";a.r(t);var n=a("dI71"),l=a("q1tI"),o=a.n(l),s=a("a8qA"),r=(a("s0+9"),a("6j4A")),i=(a("sjrs"),a("JdhN")),c=(a("UDbo"),function(e){function t(){return e.apply(this,arguments)||this}return Object(n.a)(t,e),t.prototype.render=function(){return o.a.createElement("div",{className:"body"},o.a.createElement(r.a,null),o.a.createElement(s.a,null),o.a.createElement("div",{className:"container-fluid"},o.a.createElement("h1",null,"Textbook"),o.a.createElement("div",{className:"textbook-component"},(e=[{icon:"menu_open",label:"Back to Textbook",link:"../textbook"},{icon:"bookmark",label:"Recursion I",link:"#0"},{icon:"keyboard_arrow_right",label:"1. Intro",link:"#1"},{icon:"keyboard_arrow_right",label:"2. Recursion's Two Parts",link:"#2"},{icon:"keyboard_arrow_right",label:"3. Approaching Recursion Problems",link:"#3"},{icon:"keyboard_arrow_right",label:"4. Recursion vs Iteration",link:"#4"},{icon:"format_list_bulleted_outlined",label:"5. Summary",link:"#5"},{icon:"psychology",label:"Practice Problems",link:"#practiceproblems"}].map((function(e){return Object(i.d)(e.icon,e.label,e.link)})),o.a.createElement("div",{className:"textbook-nav"},e)),o.a.createElement("div",{className:"textbook-body"},o.a.createElement("div",{id:"0",className:"textbook-topic"},o.a.createElement("h1",null,"Recursion I"),o.a.createElement("div",{className:"subtitle"},"An introduction into recursion basics."),o.a.createElement("div",{className:"textbook-section"},o.a.createElement("div",{className:"header"},"Welcome!"),o.a.createElement("div",{className:"body"},"In Spring 2021, CS10 is expanding upon last fall's teaching plan to better support students and encourage participation during this unusual online offering of the course. Special thank you to John DeNero and the CS61A team for writing the original document which this was based on."),o.a.createElement("div",{className:"body"},"This course allows time conflicts!")),o.a.createElement("div",{className:"textbook-section"},o.a.createElement("div",{className:"header"},"Collaboration, Not Competition"),o.a.createElement("div",{className:"body"},"You are encouraged to form study groups and work together to understand course material, but (unless specified otherwise) all your graded work should be your own."),o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"Flexibility and Community"),o.a.createElement("div",{className:"body"},"Online classes taught during a time of wildfires, power outages, and a worldwide pandemic need to have policies that support students in different living situations, and in different time zones.")))),o.a.createElement("div",{id:"1",className:"textbook-topic"},o.a.createElement("h2",null,o.a.createElement("strong",null,"1")),o.a.createElement("h2",null,"Introduction"),o.a.createElement("div",{className:"textbook-section"},o.a.createElement("div",{className:"body"},"Outside of math and computer science, you can think of recursion as a specific kind of pattern. That’s not to say it’s like polka dots or stripes: rather, a recursive pattern is often made because, within one level of a pattern, there is another smaller, but generally otherwise identical, level."),o.a.createElement("div",{className:"body"},"To put it more concretely, consider Russian dolls:"),o.a.createElement("div",{className:"body"},"Within the biggest doll, there is a smaller doll. Within that smaller doll, there is an even smaller doll. This continues until you can no longer fit dolls inside the smallest one."),o.a.createElement("div",{className:"body"},"If you have heard of the “dream within a dream” concept of the movie Inception, that also counts as recursion."),o.a.createElement("div",{className:"body"},"The characters go deeper into the levels of the dream, which is analogous to the smaller Russian dolls."))),o.a.createElement("div",{id:"2",className:"textbook-topic"},o.a.createElement("h2",null,o.a.createElement("strong",null,"2")),o.a.createElement("h2",null,"The Two Parts of Recursion"),o.a.createElement("div",{className:"textbook-section"},o.a.createElement("div",{className:"body"},"Let’s start off with a common example: factorial. Recall that the factorial mathematical function is represented by the ! symbol."),o.a.createElement("div",{className:"math"},"1! = 1    ",o.a.createElement("br",null),"2! = 2 × 1 = 2    ",o.a.createElement("br",null),"5! = 5 × 4 × 3 × 2 × 1 = 120"),o.a.createElement("div",{className:"body"},"Factorial is a great example of a function that can be written recursively. Before we even get to code writing, let’s think about how we can break down the function in a visual sense:"),o.a.createElement("div",{className:"body"},"Let’s begin with 4!."),o.a.createElement("div",{className:"math"},"4! = 4 × 3 × 2 × 1"),o.a.createElement("div",{className:"body"},"You might notice that there is another way we can write this:"),o.a.createElement("div",{className:"math"},"4! = 4 × (3 × 2 × 1)",o.a.createElement("br",null),"    = 4 × 3!"),o.a.createElement("div",{className:"body"},"If we continue this for 2!, here’s the whole equation written out:"),o.a.createElement("div",{className:"math"}," 4! = 4 × 3! ",o.a.createElement("br",null),"                 3! = 3 × 2! ",o.a.createElement("br",null),"                                  2! = 2 × 1!    ",o.a.createElement("br",null),"                                                 1! = 1"),o.a.createElement("div",{className:"body"},"Notice the repeating pattern, which is ",o.a.createElement("em",null,"n"),"! = ",o.a.createElement("em",null,"n"),"  × (",o.a.createElement("em",null,"n "),"- 1)!, where ",o.a.createElement("em",null,"n")," is any positive integer."),o.a.createElement("div",{className:"body"},"Let’s see how we can take this understanding of factorial and turn it into a recursive solution."),o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"The Base Case"),o.a.createElement("div",{className:"body"},"You can think of this as the stopping point of the recursive function, that prevents it from going on forever."),o.a.createElement("div",{className:"body"},"Another way to consider the base case is thinking of it as the smallest level of a problem."),o.a.createElement("div",{className:"bigidea"},"The ",o.a.createElement("strong",null,"base case")," is where recursion stops because you have reached the smallest possible level and the problem can no longer be broken down."),o.a.createElement("div",{className:"body"},"Let’s consider how this looks in factorial. Without a base case, we eventually run into:"),o.a.createElement("div",{className:"math"},"1! = 1 × 0!"),o.a.createElement("div",{className:"body"},"Okay, this is fine because 0! is 1. Let’s continue:"),o.a.createElement("div",{className:"math"},"1! = 1 × 0! ",o.a.createElement("br",null),"                0! = 0 × (-1)!"),o.a.createElement("div",{className:"body"},"This is not fine because (-1)! is -1. In order to stop before we get to this point, it is important to define the simplest level. "),o.a.createElement("div",{className:"body"},"So, let’s try to identify what the base case might look like in factorial:"),o.a.createElement("div",{className:"math"},"4! = 4 × 3!",o.a.createElement("br",null),"               3! = 3 × 2! ",o.a.createElement("br",null),"                             2! = 2 × 1!",o.a.createElement("br",null),"                                          1! = 1 × 0!",o.a.createElement("br",null),"                                                        0! = 0 × (-1)!"),o.a.createElement("div",{className:"body"},"Here, we want to stop when we reach 1!, which equals 1. So there’s no need to continue to 0! . Thus, our base case is ",o.a.createElement("em",null,"n")," = 1. ")),o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"The Recursive Case"),o.a.createElement("div",{className:"body"},"This is the part of the code that handles all of the non-simplest cases by breaking them down to get to the base case."),o.a.createElement("div",{className:"body"},"Often times, when you approach a problem, you will notice a pattern in simplifying each level, which can then be translated into the recursive case."),o.a.createElement("div",{className:"bigidea"},"The ",o.a.createElement("strong",null,"recursive case")," is where the problem can be simplified further, so the function calls on itself to break it down more."),o.a.createElement("div",{className:"body"},"Let’s identify what this looked like in factorial. This is the pattern we identified earlier:"),o.a.createElement("div",{className:"math"},"n! = n  × (n - 1)!"),o.a.createElement("div",{className:"body"},"Say ",o.a.createElement("em",null,"n")," = 5. We break down the problem of 5! by doing 5! = 5 × 4!, which gets us to the next level, 4!, where ",o.a.createElement("em",null,"n")," = 4."),o.a.createElement("div",{className:"body"},"Notice how the function is calling itself! Look at that beautiful recursive case!!"),o.a.createElement("div",{className:"body"},"Here’s what it would look like all combined together in Snap!"),o.a.createElement("div",{className:"body"},"(We are assuming that ",o.a.createElement("em",null,"n")," = 0)")))),o.a.createElement("div",{id:"3",className:"textbook-topic"},o.a.createElement("h2",null,o.a.createElement("strong",null,"3")),o.a.createElement("h2",null,"Approaching Recursion Questions"),o.a.createElement("div",{className:"textbook-section"},o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"Two Main Approaches"),o.a.createElement("div",{className:"body"},"Generally, when you’re looking to solve a recursive problem, you want to look for some kind of pattern where the solution to the given input utilizes a solution to a smaller version of the same problem. ",o.a.createElement("br",null),o.a.createElement("br",null),"There are two main ways to approach this:"),o.a.createElement("div",{className:"bullets"},o.a.createElement("mainpoint",null,o.a.createElement("strong",null,"·  top-down")),": break down the biggest pieces into smaller and smaller ones",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("mainpoint",null,o.a.createElement("strong",null,"·  bottom-up")),": start from the smallest case and look at the second-smallest case"),o.a.createElement("div",{className:"body"},o.a.createElement("strong",null,"Top-down"),o.a.createElement("br",null),"To put this into context, the factorial example approached defining a factorial using the",o.a.createElement("em",null," top-down method"),", looking at 5! and then 4! and so on.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"Bottom-up"),o.a.createElement("br",null),"However, the pattern could have beenidentified just as effectively by looking at 0! and 1! (which both evaluate to 1) and then looking at 2!, which would be the ",o.a.createElement("em",null,"bottom-up method"),". ",o.a.createElement("br",null),o.a.createElement("br",null),"Neither method is necessarily better than the other! Feel free to use whichever one makes more sense. And if you’re doing a problem and breaking it down one way hasn’t illuminated a clear solution, maybe give the other one a try! ",o.a.createElement("br",null),o.a.createElement("br",null),"Just as a reminder: you won’t use non if/else command blocks; recursion is all about moving around data (e.g. your input variables) , so it’s reporter and boolean blocks all the way! ")),o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"Solving The Base Case"),o.a.createElement("div",{className:"body"},"As mentioned previously, you want your base case to identify that you’ve reached the simplest version of the input data, and then return something.",o.a.createElement("mainpoint",null,o.a.createElement("strong",null,"This means you’ll always be using an ",o.a.createElement("em",null,"if "),"block and a boolean."))," Here are some examples:",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"Numbers"),o.a.createElement("br",null),"With numbers, you’ll generally be decrementing the value until you hit 0 or 1, often determined by the way you’re recombining the numbers at the end, such as in the factorial example! In these situations, you’ll be best served by these blocks:"),o.a.createElement("div",{className:"body"},o.a.createElement("strong",null,"Text"),o.a.createElement("br",null),"Often when you’re doing recursion on an input of sentence or word type, you’ll be wanting to do a certain action to every word in the sentence or every letter in a word (or, maybe both!). The goal of your base case will be to let you know you’ve reached the end of the input with something like:"),o.a.createElement("div",{className:"body"},o.a.createElement("strong",null,"Lists"),o.a.createElement("br",null),"You can approach lists the same way you approach text — just keep in mind that Snap! has a handy-dandy built in block you can also use, which tells you if there’s nothing in the list anymore:"),o.a.createElement("div",{className:"body"},o.a.createElement("mainpoint",null,o.a.createElement("strong",null,"The reason there are different things you can have as your base condition is because each problem is different")),", so the way you break each level down varies. As a result, the scope of your base condition may change.")),o.a.createElement("div",{className:"textbook-subsection"},o.a.createElement("div",{className:"header"},"Solving The Recursive Case"),o.a.createElement("div",{className:"body"},"The cases you don’t cover in your base case, meaning the cases which are not the literal simplest case, are the ones that your recursive case handles. Your recursive case has a few jobs:",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("strong",null,"1. Split the input"),o.a.createElement("br",null),"Your recursive case should split the input in order to call the function on a smaller input. A few blocks you could use this are:"),o.a.createElement("div",{className:"body"},o.a.createElement("strong",null,"2. Recursive call"),o.a.createElement("br",null),"Here we make the function call on itself, but with a smaller level input. It is crucial that previous steps (splitting the input and identifying the base case) were done correctly."),o.a.createElement("div",{className:"body"},o.a.createElement("strong",null,"3. Combine"),o.a.createElement("br",null),"You’ll also want to connect what’s returned at this level with the results of the recursive call to the function, using blocks like:"),o.a.createElement("div",{className:"body"},"Some problems require you to do something to the part that gets split off (see practice problems). But here, the ",o.a.createElement("em",null,"n")," is fine as is.",o.a.createElement("br",null),o.a.createElement("br",null),"Sometimes, a problem will require two recursive calls, or two base cases. This will be covered in depth in  Recursion II."))))))));var e},t}(o.a.Component));t.default=c},"s0+9":function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-textbookchaps-recursion-i-jsx-061cc092a1dd0821a5af.js.map