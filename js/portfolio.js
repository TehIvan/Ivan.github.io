function getParams() {

    var params = {},
        pairs = document.URL.split('?')
               .pop()
               .split('&');

    for (var i = 0, p; i < pairs.length; i++) {
           p = pairs[i].split('=');
           params[ p[0] ] =  p[1];
    }     

    return params;
}

const params = getParams();

const { title } = params;

fetch("/data.json").then(res => res.json()).then(res => {

    let data = res.find(r => r.title == title);

    const container = document.createElement("div");
    
    const head = document.createElement("h1");

    head.className = "p-title";
    head.textContent = title;

    container.appendChild(head);

    const wrapper = document.createElement("div");

    wrapper.className = "p-container";

    for (const image of data.images) {
        const img = document.createElement("img");
        
        img.className = "p-image";
        img.src = image;
        img.alt = "Image"

        wrapper.appendChild(img);
    }

    container.appendChild(wrapper);

    document.body.appendChild(container);

})