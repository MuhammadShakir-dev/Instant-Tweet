                    const form = document.querySelector('form');
                    const input = document.querySelectorAll('input');
                    const li = document.querySelector('#tweetCont')

                    form.addEventListener('submit',function(e){
                        e.preventDefault();
                        const usrname = input[0].value;
                        const tweet = input[1].value;
                        const newli = document.createElement('li');
                        newli.append(usrname);
                        newli.append(` -  ${"Tweet : "} ${tweet}`);
                        li.append(newli);
                        input[0].value = "";
                        input[1].value = "";
                    });
