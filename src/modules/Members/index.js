import membersList from "./memberList.js";
import classNames from "classnames";
import styles from "./styles.css";

const crateMemberContainer = element => {
  let itemClasses = {
    [`${styles.memberFlexItem}`]: element.role === "member",
    [`${styles.organizerFlexItem}`]: element.role === "organizer"
  };

  let imageClasses = {
    [`${styles.memberImageCropper}`]: element.role === "member",
    [`${styles.organizerImageCropper}`]: element.role === "organizer"
  };

  return `
    <li class="${classNames(itemClasses)}">
          <div class="${classNames(imageClasses)}">
        <img src=${element.photo} alt="Photo of ${element.name}" 
            class="${styles.memberPhoto}">
          </div>
          ${
            element.role === "organizer"
              ? `<div class="${styles.memberName}">${element.name}</div>`
              : ``
          } 
      </li>
      `;
};

const addMembers = membersList => {
  const organizers = [];
  const regularMember = [];

  membersList.forEach(element => {
    if (element.role === "organizer") {
      organizers.push(crateMemberContainer(element));
    } else if (element.role === "member") {
      regularMember.push(crateMemberContainer(element));
    }
  });

  return `
    <ul class="${classNames(
      styles.flexContainer,
      styles.list
    )}" id="js-organizer-list">
        ${organizers.join("")}
    </ul>
    <ul class="${classNames(
      styles.flexContainer,
      styles.list
    )}" id="js-member-list">
        ${regularMember.join("")}
    </ul>
    `;
};

const whoami = `
    <div class="${classNames(styles.flexContainer, styles.flexContainerTitle)}">
        <h2 class="${styles.whoami}"> ¿Quiénes somos? </h2>
    </div>
`;

export const Members = `
<div class="${styles.membersContainer}">
    <div class="${styles.membersWrapper}">
        ${whoami}
        ${addMembers(membersList)}
    </div>
</div>
`;
