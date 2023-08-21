const displayPhoto = (e) => {
    event.preventDefault();
    let input = document.getElementById("id").value;
    console.log(input);
    input = input.toLowerCase();
    console.log(input);
    let redirect_page;
    if (input.substring(0, 3) === "eng") redirect_page = location.replace("engin.html")
    redirect_page;
    if (input.substring(0, 3) === "ads") redirect_page = location.replace("computer_sciene_it.html")
    redirect_page;
    if (input.substring(0, 3) === "abs") redirect_page = location.replace("business.html")
    redirect_page;
    console.log(input)

};