void function (){
'use strict';
const generateList = function(array){
    const ulElement = document.createElement('ul');
    array.forEach(element => {
        if(typeof element === 'number'){
            const liElement = ulElement.appendChild(document.createElement('li'));
            liElement.textContent = element;
        }
        else if(Array.isArray(element)){
            const liElement = document.createElement('li');
            const nestedUlElement = document.createElement('ul');
            element.forEach(subElement => {
                const nestedliElement = nestedUlElement.appendChild(document.createElement('li'));
                nestedliElement.textContent = subElement;
            })
            liElement.appendChild(nestedUlElement);
            ulElement.appendChild(liElement);
        }
    });
    document.body.prepend(ulElement);
}
generateList([1, [1.1, 1.2], 2, 3, 4, [4.1, 4.2]]);


}()