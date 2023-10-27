var arr = [
    {
      dp: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1524638431109-93d95c968f03?auto=format&fit=crop&q=80&w=1374&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1660118235438-5cfe4d6a0e28?auto=format&fit=crop&q=80&w=1527&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1660118248632-103511f9b337?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      story:
        "https://images.unsplash.com/photo-1587343838096-cb9ec21466f4?auto=format&fit=crop&q=80&w=1530&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      dp: "https://images.unsplash.com/photo-1587343842194-d2c53873a4a6?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
      story:
        "https://images.unsplash.com/photo-1587343872016-6b156c52bb9a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    },
    {
      dp: "https://images.unsplash.com/photo-1587343872016-6b156c52bb9a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
      story:
        "https://images.unsplash.com/photo-1587343872016-6b156c52bb9a?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE5fHx8ZW58MHx8fHx8",
    },
  ];

  var storyan = document.querySelector(".storyan");
  let full = document.querySelector("#full-screen");
  var clutter = "";
  arr.forEach(function (elem, ia) {
    clutter += `<div class="story">
      <img id="${ia}" src="${elem.dp}" alt="">
    </div>`;
  });
  storyan.innerHTML = clutter;
  storyan.addEventListener("click", function (dets) {
    let st = arr[dets.target.id].story;
    full.style.display = "block";
    full.style.backgroundImage = `url(${st})`;

    setTimeout(function () {
      full.style.display = "none";
    }, 4000);
    // console.log(arr[dets.target.id].story)
  });