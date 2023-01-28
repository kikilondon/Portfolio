// create groceryList array in which to store the items
let groceryList = ['eggs', 'peaches', 'tea', 'clams', 'walnuts', 'olive oil', 'avocados','chickpeas'];

//create a function to build the list.This function is attached to the body in html file and will be displayed constantly.
function buildList() {// 
 
    let list = document.getElementById('itemList');// group all the elements with itemList as id, in which we will store the items
  
    for (let item of groceryList) {// iterate trought the array of groceryList to display these product on the web page
         let listItem = document.createElement('li');//and create an HTML list to store the item in the array. Source:https://www.w3schools.com/jsref/met_document_createelement.asp 
         //This will be the first list of item visible in the html page
        listItem.textContent = item;// add the item to the list with textContent. Source: https://www.w3schools.com/jsref/prop_node_textcontent.asp
        list.appendChild(listItem);// add the list item to the unordered list contained in HTML Source: https://www.w3schools.com/jsref/met_node_appendchild.asp



        let span= document.createElement('span');//create a span element which will store the symbol X. We are still in loop so the x will be add to each item 
        span.textContent = '\u00D7';//add the X, this is a sort of button used to cancel the item from the list 
        span.className = 'close';// add a class to span html element called 'close' which will close the list element box
        span.addEventListener('click',(e)=> deleteItem(e));//to close that we add a function with click that will trigger the function 'deleteItem'
        // source: https://www.w3schools.com/jsref/met_element_addeventlistener.asp
        listItem.appendChild(span);// add the span element to the list item, close to the product name
    }
}//the calling is in html page


function updateList() {//create a function to add new item to the grocerylist 
   let input = document.getElementById('input');// store the input from the user(new item) in a variable 
   if (input.value === '') {// if the value is empty, because the user didn't input the value
        alert('Please add an item to your grocery list');//invite the user to type an item 

    } else {// if input has a value
           groceryList.push(input.value); // add the new item to the groceryList array
           input.value ="";// reset input value to an empty string

           let list = document.getElementById('itemList');// store the unordered list a in variable again
            while (list.firstChild) {  // remove all the items from the list //source :https://www.w3schools.com/jsref/met_node_removechild.asp
            list.removeChild(list.firstChild);// this will add only the new item and will avoid to print again the list of all item already diplayed + the new item. 
        }
        
        buildList();// display the updated grocery list
    }

}  

function deleteItem(e){// this function is trigged by the event listener click linked to the span html
    let list = document.getElementById('itemList');// group all item stored in ul html 
    e.target.parentElement.style.display = 'none';// target is a property of e(event).It gets the element that trigges a specific event. The event is linked to 'span' that is child of "li".
    //"li" is the parent of "span". In this case we target the parent and we set the display style on "none". So the "li" element that contains span(or close)
    // will disappear ones the function is trigged
    groceryList.splice(e.target.parentElement, 1);//with splice, we will remove the parent element targeted from the grocery list 
    //source: https://www.w3schools.com/jsref/event_target.asp
    
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    // display the updated grocery list
    buildList();
}


let itemList = document.getElementById('itemList');//select the element with itemList as id 

itemList.addEventListener('click', function(e){//adding an event listener to the ul element with itemlist id
    
    if (e.target.tagName === 'LI') {//if the target property of event, has a value of LI (tagname) souce: https://www.w3schools.com/jsref/prop_element_tagname.asp
        e.target.classList.toggle('checked');// add a class to a specific element. Toggle elements:https://www.w3schools.com/howto/howto_js_toggle_class.asp
        // if thiese elements are clicked apply specific styling you can find under checked class in css exeternal file
    }
});

//finally add a function that add item if you press the enter key on your keyboard 
let input = document.getElementById('input');//store in a variable all elements with input as id 
input.addEventListener('keyup', function(e){//adding an event listener ( basically press the enter key) to add the new element to the list 
    if (e.keyCode === 13) {// the code of the enter key is number 13 
        //if the enter key is pressed, trigger a click event on the add button.source: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
        document.getElementById('addBtn').click();// click and the item is added
    }
});


