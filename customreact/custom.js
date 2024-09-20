
function customRender(element, container){
    const customDomElement = document.createElement(element.type);
    customDomElement.innerHTML = element.child;
    for (const prop in element.props) {
       if (prop == 'children') continue; 
       customDomElement.setAttribute(prop, element.props[prop])
    }

    container.appendChild(customDomElement)
}




const customElement ={
    type: 'a',
    props: {
        href: 'https://www.pinterest.com/',
        target: '_blank'
    },
    child: 'Browse pinterest',
}


const CustomContainer = document.querySelector('#root');

customRender(customElement, CustomContainer)