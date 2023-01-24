import React from "react";
import "./userNavbar.css";
import instalogo from "./instaclone.png";
import Lokdeshlogo from "../../../images/logo.png"
import userphoto from "./user.png";
import { Link } from "react-router-dom";

const userNavbar = () => {
  return (

    <div>
      <header class="header">
        <nav class="header__content">
          <div class="header__buttons">
            <a href="/" class="header__home">
              <img src={Lokdeshlogo} alt="" />
            </a>

          
          </div>

          <div class="header__search">
            <input type="text" placeholder="Search" />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M21.669 21.6543C21.8625 21.4622 21.863 21.1494 21.6703 20.9566L17.3049 16.5913C18.7912 14.9327 19.7017 12.7525 19.7017 10.3508C19.7017 5.18819 15.5135 1 10.3508 1C5.18819 1 1 5.18819 1 10.3508C1 15.5135 5.18819 19.7017 10.3508 19.7017C12.7624 19.7017 14.9475 18.7813 16.606 17.2852L20.9739 21.653C21.1657 21.8449 21.4765 21.8454 21.669 21.6543ZM1.9843 10.3508C1.9843 5.7394 5.7394 1.9843 10.3508 1.9843C14.9623 1.9843 18.7174 5.7394 18.7174 10.3508C18.7174 14.9623 14.9623 18.7174 10.3508 18.7174C5.7394 18.7174 1.9843 14.9623 1.9843 10.3508Z"
                fill="#A5A5A5"
                stroke="#A5A5A5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div class="header__buttons header__buttons--mobile">
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="var(--text-dark)"
                  stroke-width="1.8"
                />
                <line
                  x1="12.1"
                  y1="6.9"
                  x2="12.1"
                  y2="17.1"
                  stroke="var(--text-dark)"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
                <line
                  x1="6.9"
                  y1="11.8"
                  x2="17.1"
                  y2="11.8"
                  stroke="var(--text-dark)"
                  stroke-width="1.8"
                  stroke-linecap="round"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                  fill="var(--text-dark)"
                  stroke="var(--text-dark)"
                  stroke-width="0.6"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
                  stroke="var(--text-dark)"
                  stroke-width="1.8"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.1498 8.7952C10.2222 8.80563 10.2825 8.81606 10.3548 8.82649C11.428 9.05591 12.5252 10.0362 13.3693 10.6202C13.8396 10.9539 14.2375 10.9226 14.7078 10.6097C15.7086 9.92147 16.7456 9.26448 17.7705 8.58664C18.0478 8.39893 18.3372 8.20079 18.6748 8.45107C19.0486 8.7222 18.8195 9.0142 18.6266 9.28534C17.6137 10.6827 16.6129 12.0801 15.588 13.4671C14.8886 14.4265 13.8999 14.5621 12.8388 13.8842C12.1032 13.4045 11.3436 12.9561 10.6201 12.4556C10.1378 12.1219 9.73984 12.1636 9.28163 12.4764C8.26876 13.1647 7.24382 13.8217 6.21889 14.4995C5.94156 14.6872 5.65216 14.8854 5.31454 14.6247C4.97691 14.3744 5.15778 14.0928 5.33865 13.8321C6.3877 12.393 7.42469 10.9539 8.47374 9.51476C8.82343 9.02463 9.47456 8.73263 10.1498 8.7952Z"
                  fill="var(--text-dark)"
                />
              </svg>
            </a>
          </div>

          <div class="header__buttons header__buttons--desktop">
            <a href="#">
              
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.45307 11.751L11.9773 2.02175L21.5015 11.751C21.7906 12.0463 21.9545 12.4468 21.9545 12.8711V20.4556C21.9545 20.7747 21.7037 21 21.4427 21H15.964C15.713 21 15.4721 20.7849 15.4721 20.476V15.8886C15.4721 13.9497 13.9267 12.34 11.9773 12.34C10.0279 12.34 8.48244 13.9497 8.48244 15.8886V20.476C8.48244 20.7849 8.24157 21 7.99053 21H2.51187C2.25085 21 2 20.7747 2 20.4556V12.8711C2 12.4468 2.16397 12.0463 2.45307 11.751Z"
                  stroke="var(--text-dark)"
                  stroke-width="2"
                />
              </svg>
            </a>
           
            <a href="/UserReels">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 2.8H7C5.23269 2.8 3.8 4.23269 3.8 6V17C3.8 18.7673 5.23269 20.2 7 20.2H18C19.7673 20.2 21.2 18.7673 21.2 17V6C21.2 4.23269 19.7673 2.8 18 2.8ZM7 1C4.23858 1 2 3.23858 2 6V17C2 19.7614 4.23858 22 7 22H18C20.7614 22 23 19.7614 23 17V6C23 3.23858 20.7614 1 18 1H7Z"
                  fill="var(--text-dark)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22 7.99995H3V6.19995H22V7.99995Z"
                  fill="var(--text-dark)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 6.99989L6 1.99989L7.57349 1.12573L11.5735 6.12573L10 6.99989Z"
                  fill="var(--text-dark)"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5 6.99989L12.5 1.99989L14.0735 1.12573L18.0735 6.12573L16.5 6.99989Z"
                  fill="var(--text-dark)"
                />
                <path
                  d="M15.75 13.0671C16.0833 13.2595 16.0833 13.7407 15.75 13.9331L10.5 16.9642C10.1667 17.1566 9.75 16.9161 9.75 16.5312L9.75 10.469C9.75 10.0841 10.1667 9.84354 10.5 10.036L15.75 13.0671Z"
                  fill="var(--text-dark)"
                />
              </svg>
            </a>
            <a href="#">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                  fill="var(--text-dark)"
                  stroke="var(--text-dark)"
                  stroke-width="0.6"
                />
              </svg>
            </a>
            
            <button class="profile-button">
              <div class="profile-button__border"></div>
              <a href="/User"> <div class="profile-button__picture">
                <img src={userphoto} alt="User Picture" />
              </div></a>
             
            </button>
          </div>
        </nav>
      </header>

      <main class="main-container">
        <section class="content-container">
          <div class="content">
            

            <div class="posts">
              <article class="post">
                <div class="post__header">
                  <div class="post__profile">
                    <a
                      href="https://github.com/leocosta1"
                      target="_blank"
                      class="post__avatar"
                    >
                      <img src={userphoto} alt="User Picture" />
                    </a>
                    <a
                      href="https://github.com/leocosta1"
                      target="_blank"
                      class="post__user"
                    >
                      leocosta1
                    </a>
                  </div>

                  <button class="post__more-options">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="6.5"
                        cy="11.5"
                        r="1.5"
                        fill="var(--text-dark)"
                      />
                      <circle
                        cx="12"
                        cy="11.5"
                        r="1.5"
                        fill="var(--text-dark)"
                      />
                      <circle
                        cx="17.5"
                        cy="11.5"
                        r="1.5"
                        fill="var(--text-dark)"
                      />
                    </svg>
                  </button>
                </div>

                <div class="post__content">
                  <div class="post__medias">
                    <img
                      class="post__media"
                      src="https://images.unsplash.com/photo-1674238924120-a9d9a0425d28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
                      alt="Post Content"
                    />
                  </div>
                </div>

                <div class="post__footer">
                  <div class="post__buttons">
                    <button class="post__button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.4995 21.2609C11.1062 21.2609 10.7307 21.1362 10.4133 20.9001C8.2588 19.3012 3.10938 15.3239 1.81755 12.9143C0.127895 9.76543 1.14258 5.72131 4.07489 3.89968C5.02253 3.31177 6.09533 3 7.18601 3C8.81755 3 10.3508 3.66808 11.4995 4.85726C12.6483 3.66808 14.1815 3 15.8131 3C16.9038 3 17.9766 3.31177 18.9242 3.89968C21.8565 5.72131 22.8712 9.76543 21.186 12.9143C19.8942 15.3239 14.7448 19.3012 12.5902 20.9001C12.2684 21.1362 11.8929 21.2609 11.4995 21.2609ZM7.18601 4.33616C6.34565 4.33616 5.5187 4.57667 4.78562 5.03096C2.43888 6.49183 1.63428 9.74316 2.99763 12.2819C4.19558 14.5177 9.58639 18.6242 11.209 19.8267C11.3789 19.9514 11.6158 19.9514 11.7856 19.8267C13.4082 18.6197 18.799 14.5133 19.997 12.2819C21.3603 9.74316 20.5557 6.48738 18.209 5.03096C17.4804 4.57667 16.6534 4.33616 15.8131 4.33616C14.3425 4.33616 12.9657 5.04878 12.0359 6.28696L11.4995 7.00848L10.9631 6.28696C10.0334 5.04878 8.6611 4.33616 7.18601 4.33616Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          stroke-width="0.6"
                        />
                      </svg>
                    </button>
                    <button class="post__button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          stroke-width="0.7"
                        />
                      </svg>
                    </button>
                    <button class="post__button">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          stroke-width="0.3"
                        />
                      </svg>
                    </button>

                    <div class="post__indicators"></div>

                    <button class="post__button post__button--align-right">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
                          fill="var(--text-dark)"
                          stroke="var(--text-dark)"
                          stroke-width="0.7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="post__infos">
                    <div class="post__likes">
                      <a href="#" class="post__likes-avatar">
                        <img src="assets/default-user.png" alt="User Picture" />
                      </a>

                      <span>
                        Liked by
                        <a class="post__name--underline" href="#">
                          user123
                        </a>{" "}
                        and
                        <a href="#">73 others</a>
                      </span>
                    </div>

                    <div class="post__description">
                      <span>
                        <a
                          class="post__name--underline"
                          href="https://github.com/leocosta1"
                          target="_blank"
                        >
                          leocosta1
                        </a>
                        Responsive clone of Instagram UI. Made with ❤ for study
                        purposes.
                      </span>
                    </div>

                    <span class="post__date-time">30 minutes ago</span>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <section class="side-menu">
            <div class="side-menu__user-profile">
              <a
                href="https://github.com/leocosta1"
                target="_blank"
                class="side-menu__user-avatar"
              >
                <img src={userphoto} alt="User Picture" />
              </a>
              <div class="side-menu__user-info">
                <a href="/">leocosta1</a>
                <span>Leonardo Costa</span>
              </div>
              <button class="side-menu__user-button">Switch</button>
            </div>

            <div class="side-menu__suggestions-section">
              <div class="side-menu__suggestions-header">
                <h2>Suggestions for You</h2>
                <button>See All</button>
              </div>
              <div class="side-menu__suggestions-content">
                <div class="side-menu__suggestion">
                  <a href="#" class="side-menu__suggestion-avatar">
                    <img src={userphoto} alt="User Picture" />
                  </a>
                  <div class="side-menu__suggestion-info">
                    <a href="#">usernick16</a>
                    <span>Followed by user1, user2 and 9 others</span>
                  </div>
                  <button class="side-menu__suggestion-button">Follow</button>
                </div>
              </div>
            </div>

            <div class="side-menu__footer">
              <div class="side-menu__footer-links">
                <ul class="side-menu__footer-list">
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      About
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Help
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Press
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      API
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Jobs
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Privacy
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Terms
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Locations
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Top Accounts
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="#">
                      Hashtag
                    </a>
                  </li>
                  <li class="side-menu__footer-item">
                    <a class="side-menu__footer-link" href="/">
                      Language
                    </a>
                  </li>
                </ul>
              </div>

              <span class="side-menu__footer-copyright">
                &copy; 2023 LOKDESH
              </span>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
};

export default userNavbar;
