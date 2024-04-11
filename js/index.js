function change(path)
{
    imgElement = document.getElementById('product-main-image');
    
    if(path==1)
    {
        imgElement.src = "./img/s24.jpg";
    }
    else if(path==2)
    {
        imgElement.src = "./img/img2.webp";
    }
    else if(path==3)
    {
        imgElement.src = "./img/img3.webp";
    }
    else if(path==4)
    {
        imgElement.src = "./img/img4.webp";
    }
    else if(path==5)
    {
        imgElement.src = "./img/img5.png";
    }
    else if(path==6)
    {
        imgElement.src = "./img/img6.png";
    }
}