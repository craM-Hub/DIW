function crearForm() {
    let mainContent = document.getElementById('left-section');

    mainContent.innerHTML = `
    <section>
        <article>
            <form>
            <p>
                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname" placeholder="John">
            </p>
            <p>
                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname" placeholder="Smith">
            </p>
            <p>
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="test@test.com">
            </p>
            <p>
                <label for="phoneNumber">Phone:</label>
                <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="666-666-666" pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}">
            </p>
            <p>
                <label for="favFlower">Favorites Flowers:</label>
                <label for="rose"> Rose</label><br>
                <input type="checkbox" id="rose" name="rose" value="Rose">
                <label for="lily"> Lyli</label><br>
                <input type="checkbox" id="lily " name="lily" value="Lyli">
                <label for="tulip"> Tulip</label><br>
                <input type="checkbox" id="tulip" name="tulip" value="Tulip ">
            </p>
            <p>
                <label for="obs">Observations:</label>
                <textarea type="text" id="obs" name="obs" />
                
                </textarea>
            </p>
            <p>
                <input type="submit" value="Submit">
            </p>
            </form>
        </article>
    </section>
     `;
}
