////////////////////////////////////////////////////////////
// Definition
////////////////////////////////////////////////////////////
const showModal = (title, url, buttons = [], functions = [], modalId) => {
    // Create a wrapper element for the modal
    const modalWrap = document.createElement('div');
  
    // Function to update the size of the modal and iframe
    const updateModalSize = () => {
      const width = window.innerWidth * 0.80;
      const height = window.innerHeight * 0.80;
      const iframeWidth = width - 55;
      const iframeHeight = height - 55;
      modalWrap.querySelector('.modal-dialog').style.cssText = `min-width: ${width}px; max-width: ${width}px;`;
      modalWrap.querySelector('iframe').style.cssText = `margin: 0; border: 1px solid; box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2); border-radius: 5px; width: ${iframeWidth}px; height: ${iframeHeight}px;`;
    };
  
     // Create modal elements
     const modal= document.createElement('div');
     modal.className= 'modal fade';
     modal.id= modalId;
     modal.setAttribute('data-keyboard', 'false');
     modal.setAttribute('tabindex', '-1');
     modal.setAttribute('aria-labelledby', 'staticBackdropLabel');
     modal.setAttribute('aria-hidden', 'true');
  
     // Create a dialog element to wrap the content
     const modalDialog= document.createElement('div');
     modalDialog.className= 'modal-dialog modal-dialog-scrollable';
  
     // Create a content element to hold the header, body and footer
     const modalContent= document.createElement('div');
     modalContent.className= 'modal-content';
  
     // Create a header element to hold the title and close button
     const modalHeader= document.createElement('div');
     modalHeader.className= 'modal-header';
  
     // Create a title for the modal
     const modalTitle= document.createElement('h5');
     modalTitle.className= 'modal-title';
     modalTitle.id= 'staticBackdropLabel';
     modalTitle.textContent= title;
  
     // Create a close button for the header
     const closeButton= document.createElement('button');
     closeButton.type= 'button';
     closeButton.className= 'close';
     closeButton.setAttribute('data-dismiss', 'modal');
     closeButton.setAttribute('aria-label', 'Close');
  
     // Add an "x" symbol to the close button
     const closeSpan= document.createElement('span');
     closeSpan.setAttribute('aria-hidden', 'true');
     closeSpan.textContent= '×';
  
     closeButton.appendChild(closeSpan);
  
      // Create a body for the iframe
      const modalBody= document.createElement('div');
      modalBody.className= 'modal-body';
  
      // Create an iframe with the specified URL
      const iframe= document.createElement('iframe');
      iframe.src= url;
  
      // Create a footer for the custom buttons
      const modalFooter= document.createElement('div');
      modalFooter.className= 'modal-footer position-sticky bottom-0 bg-light';
  
       // Create custom buttons
       buttons.forEach(({ text, className, id, icon }, index) => {
         const button= document.createElement('button');
         button.type= 'button';
         button.className= `btn ${className}`;
         button.id= id;
         button.setAttribute('aria-label', text);
         if (icon) {
           const iconElement= document.createElement('i');
           iconElement.className= icon;
           button.appendChild(iconElement);
           button.appendChild(document.createTextNode(` ${text}`));
         } else {
           button.textContent= text;
         }
         if (id && functions[index]) {
           button.onclick= functions[index];
         }
         modalFooter.appendChild(button);
       });
  
       // Create close button
       const closeFooterButton= document.createElement('button');
       closeFooterButton.type= 'button';
       closeFooterButton.className ='btn btn-secondary';
       closeFooterButton.setAttribute('data-dismiss', 'modal');
       closeFooterButton.textContent ='Close';
       modalFooter.appendChild(closeFooterButton);
  
       // Append elements
       modalHeader.appendChild(modalTitle);
       modalHeader.appendChild(closeButton);
       modalBody.appendChild(iframe);
       modalContent.appendChild(modalHeader);
       modalContent.appendChild(modalBody);
       modalContent.appendChild(modalFooter);
       modalDialog.appendChild(modalContent);
       modal.appendChild(modalDialog);
       modalWrap.appendChild(modal);
  
        // Update the size of the modal and iframe
        updateModalSize();
  
        // Append the wrapper element to the body
        document.body.append(modalWrap);
  
        // Create a new Bootstrap Modal instance
        const bootstrapModal= new bootstrap.Modal(modalWrap.querySelector('.modal'), { backdrop: 'static' });
  
        // Method to disable all buttons except the close button
        bootstrapModal.disableAllButtons= () => {
          [...modalWrap.querySelectorAll('button')].forEach(button => {
            if (button.className !== 'close') {
              button.setAttribute('disabled', 'true');
            }
          });
        };
  
        // Method to enable all buttons
        bootstrapModal.enableAllButtons= () => {
          [...modalWrap.querySelectorAll('button')].forEach(button => {
            button.removeAttribute('disabled');
          });
        };
  
        // Method to find a specific button by its id and disable it
        bootstrapModal.disableButtonById= (id) => {
          const button=modalWrap.querySelector(`#${id}`);
          if (button) {
            button.setAttribute('disabled', 'true');
          }
        };
  
        // Method to find a specific button by its id and enable it
        bootstrapModal.enableButtonById= (id) => {
          const button=modalWrap.querySelector(`#${id}`);
          if (button) {
            button.removeAttribute('disabled');
          }
        };
  
        // Method to return a specific button by its id
        bootstrapModal.getButtonById= (id) => {
          return [...modalWrap.querySelectorAll(`#${id}`)];
        };
  
        // Show the Bootstrap Modal
        bootstrapModal.show();
  
        return bootstrapModal;
  }; 
  
////////////////////////////////////////////////////////////
// Invokes
////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////// Invoke #1
var url1 = 'about.html';
var function1 = function() {
    alert("Button 1 clicked");
}
var function2 = function() {
    alert("Button 2 clicked");
}
var function3 = function() {
    alert("Button 3 clicked");
}
var buttonsArray1 =
[
    { text: 'Button 1', className: 'btn btn-primary', onClick: 'function1()', id: 'button1', icon: 'fa-solid fa-magnifying-glass' },
    { text: 'Button 2', className: 'btn btn-success', onClick: 'function2()', id: 'button2', icon: 'fa-solid fa-check' },
    { text: 'Button 3', className: 'btn btn-warning', onClick: 'function3()', id: 'button3', icon: 'fa-solid fa-bars' }
];
var functionsArray1 = [ function1, function2, function3 ];
const button1 = document.getElementById('showModalButton1');
button1.addEventListener('click', function() {
    var modal = showModal('Isetia', url1, buttonsArray1, functionsArray1, 'modal1');
    modal.disableButtonById('button2');
    const buttonOne = modal.getButtonById('button1');
});



//////////////////////////////////////////////////////////// Invoke #2
var url2 = 'https://time.is/';
var function1 = function() {
    alert("Button 1 clicked");
}
var function2 = function() {
    alert("Button 2 clicked");
}
var buttonsArray2 =
[
    { text: 'Button 1', className: 'btn btn-primary', onClick: 'function1()', id: 'button1', icon: 'bi bi-box' },
    { text: 'Button 2', className: 'btn btn-success', onClick: 'function2()', id: 'button2', icon: 'bi bi-calendar' }
];
var functionsArray2 = [ function1, function2 ];
const button2 = document.getElementById('showModalButton2');
button2.addEventListener('click', function() {
    var modal = showModal('Isetia', url2, buttonsArray2, functionsArray2, 'modal2');
    modal.disableAllButtons();
    modal.enableButtonById('button2');
});


