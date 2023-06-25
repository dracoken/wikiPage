
function changePage()
{
    const form = document.createElement("form");

    /*
     *  SPECIAL IMPORTANT NOTES ON THE FORM HTML ELEMENT
     *
     *                      Action Attribute (form.action = "url/path")
          - Action is the path/url where the data is sent to.
          - If action is null/blank, then form assumes the data is being sent to the same page (the same URL).
          - The form sends data in the structure of a query string (if attribute method="get").


                            Target Attribute (form.target = "url")
          - Target is which window (or tab, frame, iframe) to use for the request. 
          - If the window, that the form's target attribute specifyies, isn't open in the browser, then a new tab will be opened in the browser at the specified url.
          - If target is null/blank, then form assumes that the current window(or tab) is being used.
          - If form.target="_blank", then a new window of _blank will be opened
     *
     *
     */


    form.action = "/test2"; //action is the path/url where the data is sent to.
    form.method = "get";  //form html element's default method value is a get request
    document.body.appendChild(form);  //this connects the html element to the dom, is required if you wanna use their properties
    form.requestSubmit();

    /*
     * IMPORTANT INFORMATION ON THE FORM HTML ELEMENT - DIFFERENCE BETWEEN submit() AND requestSubmit()
     *
     *                      SUBMIT() - Unexpected Behaviors
     *      -----------------------------------------------------------------------------
        1)  # submit() bypasses the vaildation of the form's data. For instance, in the form below. 
              - in this case submit() ignores the required attribute of the email, proceeding to the URL the action attribute specified without any pior data checks
              - ie if this was used for registering account, you could end up in a case, where multiple accounts have the same username
              # dosen't triger the submit event (aka whatever function the submit attribute is set to)
              # lastly submit() can't be cancelled

                <form>   
                    <input required name="email" id="email" type="email" placeholder="Email here ...">
                    <input type="submit" class="submit-btn" value="Use submit()" />
                </form>


              - even if you add the submit event in a seperate javascript file, through the use of event listener(s), submit() will still bypass any form data vaildation
              - for instance in this example down below

                form.addEventListener('submit', e => {
                // this code will not be called when using submit()
                e.preventDefault()
                alert('Code after preventDefault called')
                });



                            REQUEST_SUBMIT() - with full browser support
                -------------------------------------------------------------------------
        2)  requestSubmit() provies a more predictable behaviour to form submissions.
              # It allows/checks the native form vaildation, and allows for interceptions with eventlisteners such as addEventListener('submit') like how we used above.
                    ? native form vaildation: I believe this is either meant as the built-in vaildation attributes, or the selfmade code you programed for said vaildation
              # It triggers the submit event (aka whatever value the submit attribute is set to)
              # can be cancelled using event.preventDefault() in a submit event handler

              - Long story short requestSubmit() is safer and better to use in most cases than submit()
     *
     *
     * 
     *      In this specific case both works
     */
}

function changePageBack()
{
      const form = document.createElement("form");
      form.setAttribute("action","/");
      form.setAttribute("method","get");
      document.body.appendChild(form);
      form.requestSubmit();
}