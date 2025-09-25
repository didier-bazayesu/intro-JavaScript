const areaOrPerimeter = function (l, w) {
    // Return your answer

    if (l == w) {

        return l * w;
    }
    else {
        let perimeter = l + w;
        return perimeter * 2;
    }
};