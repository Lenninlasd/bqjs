import membersList from "./memberList.js";

const membersStyle = `<style>
    .members-container {
        position: relative;
    }

    .members-wrapper {
        margin: auto;
        max-width: 1152px;  

    }
    .member-image-cropper {
        width: 10vh;
        height: 10vh;
        position: relative;
        overflow: hidden;

        text-align: center;
    }
    .member-photo {
        border-radius: 50%;
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    .member-name {
        margin-top: 16px;
        font-weight: 400;
        font-size: 2vh;
    }

    .organizer-image-cropper {
        width: 15vh;
        height: 15vh;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
    }
    .list{
        list-style-type: none;
    }

    .flex-container {
        padding: 50px 0;
        margin: 0;
        list-style: none;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: space-around;
        color: #393939;
        font-size: 2.5vh;
    }

    .whoami {
        padding-bottom: 0vh;
        font-family: Roboto, "Lucida Console";
        font-size: 4rem;
        font-weight: 300;
        line-height: 1.2;
    }

    .member-flex-item {
        padding: 1vh;
        width: 10vh;
        height: 10vh;
        line-height: 3vh;
        text-align: center;
    }


</style>`;

const crateMemberContainer = element => `
    <li class="${element.role}-flex-item">
        <div class="${element.role}-image-cropper">
            <img src=${element.photo} alt="Photo of ${element.name}" class="member-photo">
        </div>
        ${element.role === "organizer"? `<div class="member-name">${element.name}</div>`: ``} 
    </li>
    `;

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
    <ul class="flex-container list" id="js-organizer-list">
        ${organizers.join("")}
    </ul>
    <ul class="flex-container list" id="js-member-list">
        ${regularMember.join("")}
    </ul>
    `;
};

const whoami = `
    <div class="flex-container flex-container-title">
        <h2 class="whoami"> ¿Quiénes somos? </h2>
    </div>
`;

export const Members = `
<div class="members-container">
    <div class="members-wrapper">
        ${membersStyle}
        ${whoami}
        ${addMembers(membersList)}
    </div>
</div>
`;
