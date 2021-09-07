export const User = (userObject) => {
  const dateObjBirth = new Date(userObject.dob.date);
  const formattedDateBirth = dateObjBirth.toLocaleDateString();

    return `
      <section class="user">
        <header>
            <h2 class="user__name">${userObject.name.first}</h2>
        </header>
        <img class="user__image" src="${userObject.picture.large}" />
        <h3 class="date">${formattedDateBirth}</h3>
        <section class="gender">${userObject.gender}</section>
        <section class="email">${userObject.email}</section>
        <section class="phone">${userObject.phone}</section>
        <div><button id="edit--${userObject.id}">Edit</button></div>
      </section>
    `
}
