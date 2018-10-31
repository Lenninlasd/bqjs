/* const membersStyle = `<style>
    .member-image-cropper {
        width: 15vh;
        height: 15vh;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        text-align: center;
    }
    .member-photo {
        display: inline;
        margin: 0 auto;
        height: 100%;
        width: auto;
    }
    .organizer-image-cropper {
        width: 30vh;
        height: 30vh;
        position: relative;
        overflow: hidden;
        border-radius: 50%;
        text-align: center;
    }
    .list{
        list-style-type: none;
    }

    .flex-container {
        padding: 10vh;
        padding-top: 0;
        margin: 0;
        list-style: none;
        display: -webkit-box;
        display: -moz-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-flow: row wrap;
        justify-content: space-around;
        font-family: "Lucida Console", "Lucida Sans Typewriter", monaco, "Bitstream Vera Sans Mono", monospace;
        color: #393939;
        font-size: 2.5vh;
    }

    .flex-container-title{
        padding-bottom: 0vh;
    }

    .member-flex-item {
        padding: 2vh;
        width: 15vh;
        height: 15vh;
        margin-top: 5vh;
        line-height: 3vh;
        text-align: center;
    }

    .organizer-flex-item {
        padding: 5vh;
        height: 15vh;
        margin-top: 10vh;
        line-height: 3vh;
        text-align: center;
    }
</style>`;

import membersList from './memberList.js';

const crateMemberContainer = element => (
    `<li class="${element.role}-flex-item">
            <div class="${element.role}-image-cropper">
             <img src=${element.photo} alt="Photo of ${element.name} " class="member-photo">
            </div>
         <div class="member-name">${element.name}</div>
    </li>`
);

const addMembers = membersList => {
    const organizers = [];
    const regularMember = [];

    membersList.forEach(element => {
        if (element.role === 'organizer') {
            organizers.push(crateMemberContainer(element));
        }else if(element.role === 'member'){
            regularMember.push(crateMemberContainer(element));
        }
    });

    return (
        `<ul class="flex-container list" id="js-organizer-list">
            ${ organizers.join('') }
        </ul>
        <ul class="flex-container list" id="js-member-list">
            ${ regularMember.join('') }
        </ul>`
    );
};

const whoami = `
    <div class="flex-container flex-container-title">
        <h2 class="whoami"> ¿Quiénes somos? </h2>
    </div>
`;

export const membersTempl =`
    ${ membersStyle }
    ${ whoami }
    ${ addMembers(membersList) }
`;
 */
