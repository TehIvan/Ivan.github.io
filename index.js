fetch('/Ivan.github.io/data.json')
  .then(response => response.json())
  .then(data => {
    const workContainer = document.querySelector('#work-items');
    data.forEach(item => {
      const workItem = document.createElement('div');
      workItem.classList.add('work-item');

      const title = document.createElement('h3');
      title.textContent = item.title;
      workItem.appendChild(title);

      const image = document.createElement('img');
      image.src = item.image;
      image.alt = `Screenshot of ${item.title}`;
      workItem.appendChild(image);

      const description = document.createElement('p');

      let text = "<p>" + item.description.join("<br>").replace("{link}", `<a href=${item.url}>View Images</a>`) + "</p>"

      description.innerHTML = text;
      description.classList.add("description")
      workItem.appendChild(description);

      const category = document.createElement('p');
      category.textContent = `Category: ${item.category}`;

      const button = document.createElement("button");
      button.classList.add("expand-btn");
      button.textContent = "Read More"
      
      button.addEventListener('click', event => {
        const parentNode = event.target.parentNode;
        parentNode.classList.toggle('expanded');
        event.target.textContent = parentNode.classList.contains('expanded') ? 'Read less' : 'Read more';
    });

      workItem.append(button);
      workItem.appendChild(category);

      workContainer.appendChild(workItem);
    });
  });
