import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className=''>
        <div class="container">
            <div class="up">
                <div class="left">
                    <div class="logo">
                        <svg width="165" height="45" viewBox="0 0 165 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.5373 27.3952C51.4457 26.1603 51.2168 24.8798 50.8048 23.6906C50.4386 22.5473 49.935 21.4039 49.2941 20.352L38.2614 1.87513C37.5747 0.686023 36.2929 0 34.9195 0C33.5461 0 32.3101 0.686023 31.5776 1.87513L25.7637 11.6167L19.9498 1.87513C19.2631 0.686023 17.9813 0 16.6079 0C15.2345 0 13.9985 0.686023 13.266 1.87513L2.27909 20.352C1.63818 21.4039 1.13461 22.5473 0.768383 23.6906C0.402151 24.8798 0.127477 26.1603 0.0359186 27.3952C-0.0556393 28.63 0.0359186 29.8649 0.219035 31.0997C0.814162 34.7127 2.6911 38.0514 5.43784 40.5211C8.3677 43.128 12.03 44.5 16.0128 44.5H17.2488C20.316 44.5 23.2459 43.6768 25.8095 42.0761C28.3273 43.6768 31.2572 44.5 34.3702 44.5H35.6062C39.589 44.5 43.2513 43.128 46.1811 40.5211C48.9279 38.0971 50.8048 34.7127 51.3999 31.0997C51.5373 30.2307 51.6288 29.3618 51.6288 28.4928C51.6288 28.1269 51.6288 27.761 51.6288 27.3952H51.5373ZM47.6918 30.5051C46.822 35.6274 42.3815 40.7955 35.5604 40.7955H34.3244C32.3559 40.7955 30.5247 40.3839 28.8309 39.5149C31.0283 37.1824 32.4932 34.2097 33.0426 31.0997C33.1799 30.2307 33.2715 29.3618 33.2715 28.4928C33.2715 28.4928 33.2715 28.4928 33.2715 28.4471L35.0111 28.3556L34.8737 25.7945L27.778 26.1146L27.9153 28.6757L29.5634 28.5843C29.5634 29.2246 29.5176 29.8191 29.3803 30.4594C28.8767 33.5694 27.1371 36.4049 24.665 38.3258C22.5592 39.9265 19.9956 40.7955 17.2488 40.7955H16.0128C9.14594 40.7955 4.70538 35.6274 3.88135 30.4594C3.74402 29.499 3.69824 28.5843 3.74402 27.6238C3.7898 26.6634 4.01869 25.703 4.29337 24.7883C4.56804 23.8736 4.98005 23.0046 5.48362 22.1814L16.4706 3.79599C16.4706 3.79599 16.5164 3.70452 16.6079 3.70452C16.6995 3.70452 16.7453 3.75026 16.7453 3.79599L23.6121 15.2754L20.5907 20.352C19.9498 21.4039 19.4462 22.5473 19.08 23.6906C18.8053 24.6053 18.5764 25.52 18.4391 26.4805L16.6079 26.5719L16.7453 29.1331L23.841 28.813L23.7037 26.2518L22.2387 26.3433C22.3303 25.8402 22.4676 25.3371 22.605 24.8798C22.8796 23.9651 23.2916 23.0961 23.7952 22.2729L34.7822 3.79599C34.7822 3.79599 34.828 3.70452 34.9195 3.70452C35.0111 3.70452 35.0569 3.75026 35.0569 3.79599L46.0896 22.2729C46.5932 23.0961 46.9594 23.9651 47.2798 24.8798C47.6003 25.7945 47.7834 26.7549 47.8292 27.7153C47.8292 27.9897 47.8292 28.2641 47.8292 28.5385C47.8292 29.2246 47.7834 29.8649 47.6461 30.5509L47.6918 30.5051Z" fill="white"/>
                            <path d="M92.8402 32.5634C88.4454 32.5634 84.4168 30.9169 81.4412 27.9442C78.4655 24.9714 76.8175 20.901 76.8175 16.5104C76.8175 12.1199 78.4655 8.0495 81.4412 5.07674C84.4168 2.10397 88.4454 0.45752 92.8402 0.45752C96.7314 0.45752 100.485 1.78383 103.324 4.16204C103.781 4.52792 104.056 5.07674 104.056 5.67129C104.056 6.26584 103.827 6.81466 103.369 7.22628L103.14 7.45495C102.774 7.77509 102.271 8.00377 101.767 8.00377C101.263 8.00377 100.806 7.82083 100.439 7.50068C98.2879 5.62556 95.8158 4.71086 92.8402 4.71086C86.3853 4.71086 81.3496 9.92463 81.3496 16.5562C81.3496 23.1877 86.3853 28.4015 92.8402 28.4015C95.7242 28.4015 98.3794 27.3953 100.348 25.5202C101.996 23.9652 103.003 21.8614 103.003 20.0778V19.1173H95.1291C93.9846 19.1173 93.069 18.2026 93.069 17.0593C93.069 15.9159 93.9846 15.0012 95.1291 15.0012H106.894C107.444 15.0012 107.901 15.4585 107.901 16.0074V17.9282C107.901 21.9986 106.437 25.7031 103.781 28.3558C102.454 29.6821 100.851 30.734 99.0203 31.4657C97.1434 32.2432 95.0375 32.6091 92.7944 32.6091L92.8402 32.5634Z" fill="white"/>
                            <path d="M115.409 31.969C114.86 31.969 114.402 31.5117 114.402 30.9628V2.05841C114.402 1.50959 114.86 1.05225 115.409 1.05225H128.365C129.509 1.05225 130.425 1.96694 130.425 3.11031C130.425 4.29942 129.509 5.21412 128.365 5.21412H118.934V14.2696H127.724C128.868 14.2696 129.784 15.1843 129.784 16.3277C129.784 17.5168 128.868 18.4315 127.724 18.4315H118.934V27.8529H128.548C129.692 27.8529 130.608 28.7676 130.608 29.9109C130.608 31.0543 129.692 31.969 128.548 31.969H115.409Z" fill="white"/>
                            <path d="M151.987 32.5634C147.592 32.5634 143.518 30.9169 140.588 27.9442C137.612 24.9714 135.964 20.901 135.964 16.5105C135.964 12.1199 137.612 8.0495 140.588 5.07674C143.563 2.10397 147.592 0.45752 151.987 0.45752C156.381 0.45752 160.273 2.0125 163.111 4.93953C163.569 5.39688 163.798 6.08291 163.706 6.72319C163.614 7.40922 163.248 8.00377 162.653 8.32391C162.287 8.55259 161.921 8.64406 161.509 8.64406C160.868 8.64406 160.273 8.36965 159.861 7.9123C157.846 5.76276 155.1 4.61939 151.987 4.61939C145.532 4.61939 140.496 9.83316 140.496 16.4647C140.496 23.0963 145.532 28.31 151.987 28.31C155.1 28.31 157.846 27.1667 159.861 25.0171C160.318 24.5598 160.914 24.2854 161.509 24.2854C161.921 24.2854 162.333 24.3768 162.653 24.6055C163.248 24.9714 163.614 25.5659 163.706 26.252C163.798 26.8923 163.569 27.5783 163.111 28.0356C160.227 30.9627 156.381 32.5176 151.987 32.5176V32.5634Z" fill="white"/>
                            <path d="M77.8705 38.4175C78.1451 38.4175 78.374 38.6462 78.374 38.9206C78.374 39.195 78.1451 39.4236 77.8705 39.4236C77.5958 39.4236 77.4127 39.195 77.4127 38.9206C77.4127 38.6462 77.5958 38.4175 77.8705 38.4175ZM77.5042 43.9057V40.1097H78.2367V43.9057H77.5042Z" fill="white"/>
                            <path d="M82.9977 43.9055V40.1095H83.6844V40.7498C83.8217 40.3839 84.2337 40.0181 84.9204 40.0181C85.6986 40.0181 86.3853 40.5211 86.3853 41.7103V43.9055H85.6529V41.8475C85.6529 41.07 85.2866 40.7498 84.7373 40.7498C84.1422 40.7498 83.7759 41.2529 83.7759 41.9389V43.9055H83.0435H82.9977Z" fill="white"/>
                            <path d="M91.1463 40.7955H90.4597V40.1095H90.8259C91.0548 40.1095 91.1463 40.018 91.1921 39.7894V39.0576H91.9246V40.1553H93.0233V40.8413H91.9246V42.6707C91.9246 43.128 92.1535 43.2652 92.4739 43.2652C92.7486 43.2652 92.8859 43.2652 93.1148 43.2195V43.9512C92.8859 43.997 92.7028 44.0427 92.4282 44.0427C91.6957 44.0427 91.1921 43.5854 91.1921 42.7621V40.887L91.1463 40.7955Z" fill="white"/>
                            <path d="M100.852 42.3048H97.8759C98.0132 42.8994 98.5168 43.2652 99.1119 43.2652C99.5697 43.2652 99.7986 43.1738 100.211 42.8536L100.668 43.3567C100.211 43.7683 99.7528 43.9513 99.1577 43.9513C98.0132 43.9513 97.1434 43.0823 97.1434 41.9847C97.1434 40.887 98.0132 40.0181 99.1577 40.0181C100.302 40.0181 100.943 40.8413 100.943 41.8475C100.943 41.9847 100.943 42.2133 100.897 42.3048H100.852ZM100.165 41.6645C100.119 41.1157 99.7528 40.7041 99.1119 40.7041C98.5168 40.7041 98.059 41.07 97.9217 41.6645H100.211H100.165Z" fill="white"/>
                            <path d="M105.292 43.9057V40.1097H105.979V40.8872C106.116 40.4756 106.482 40.064 107.444 40.064V40.8415C106.391 40.8415 106.025 41.4817 106.025 42.1678V43.9057H105.292Z" fill="white"/>
                            <path d="M111.793 43.9055V40.1095H112.479V40.7498C112.617 40.3839 113.029 40.0181 113.715 40.0181C114.494 40.0181 115.18 40.5211 115.18 41.7103V43.9055H114.448V41.8475C114.448 41.07 114.082 40.7498 113.532 40.7498C112.937 40.7498 112.571 41.2529 112.571 41.9389V43.9055H111.838H111.793Z" fill="white"/>
                            <path d="M121.36 40.7041C120.811 40.7041 120.536 40.9785 120.308 41.2529L119.667 40.887C119.941 40.4297 120.399 40.0181 121.315 40.0181C122.23 40.0181 122.825 40.5669 122.825 41.3444V43.9055H122.139V43.3567C121.91 43.7226 121.452 43.997 120.811 43.997C120.079 43.997 119.484 43.5854 119.484 42.8994C119.484 42.2133 119.941 41.8932 120.628 41.8017L121.773 41.6188C121.773 41.6188 122.093 41.5273 122.093 41.3444C122.093 41.1157 121.864 40.7498 121.315 40.7498L121.36 40.7041ZM122.139 42.1676L120.948 42.3505C120.536 42.3963 120.353 42.5792 120.353 42.8536C120.353 43.1738 120.628 43.311 121.04 43.311C121.727 43.311 122.185 42.9451 122.185 42.3048V42.1676H122.139Z" fill="white"/>
                            <path d="M127.678 40.7955H126.991V40.1095H127.358C127.586 40.1095 127.678 40.018 127.724 39.7894V39.0576H128.456V40.1553H129.555V40.8413H128.456V42.6707C128.456 43.128 128.685 43.2652 129.006 43.2652C129.28 43.2652 129.418 43.2652 129.646 43.2195V43.9512C129.418 43.997 129.234 44.0427 128.96 44.0427C128.227 44.0427 127.724 43.5854 127.724 42.7621V40.887L127.678 40.7955Z" fill="white"/>
                            <path d="M134.316 38.4175C134.591 38.4175 134.82 38.6462 134.82 38.9206C134.82 39.195 134.591 39.4236 134.316 39.4236C134.041 39.4236 133.858 39.195 133.858 38.9206C133.858 38.6462 134.041 38.4175 134.316 38.4175ZM133.95 43.9057V40.1097H134.682V43.9057H133.95Z" fill="white"/>
                            <path d="M141.091 40.0181C142.236 40.0181 143.106 40.887 143.106 41.9847C143.106 43.0823 142.236 43.9513 141.091 43.9513C139.947 43.9513 139.077 43.0823 139.077 41.9847C139.077 40.887 139.947 40.0181 141.091 40.0181ZM142.327 41.9847C142.327 41.2986 141.778 40.7041 141.091 40.7041C140.405 40.7041 139.855 41.2986 139.855 41.9847C139.855 42.6707 140.359 43.2652 141.091 43.2652C141.824 43.2652 142.327 42.7164 142.327 41.9847Z" fill="white"/>
                            <path d="M147.546 43.9055V40.1095H148.233V40.7498C148.37 40.3839 148.782 40.0181 149.469 40.0181C150.247 40.0181 150.934 40.5211 150.934 41.7103V43.9055H150.201V41.8475C150.201 41.07 149.835 40.7498 149.286 40.7498C148.691 40.7498 148.324 41.2529 148.324 41.9389V43.9055H147.592H147.546Z" fill="white"/>
                            <path d="M157.068 40.7041C156.519 40.7041 156.244 40.9785 156.015 41.2529L155.374 40.887C155.649 40.4297 156.107 40.0181 157.022 40.0181C157.938 40.0181 158.533 40.5669 158.533 41.3444V43.9055H157.846V43.3567C157.617 43.7226 157.16 43.997 156.519 43.997C155.786 43.997 155.191 43.5854 155.191 42.8994C155.191 42.2133 155.649 41.8932 156.336 41.8017L157.48 41.6188C157.48 41.6188 157.801 41.5273 157.801 41.3444C157.801 41.1157 157.572 40.7498 157.022 40.7498L157.068 40.7041ZM157.846 42.1676L156.656 42.3505C156.244 42.3963 156.061 42.5792 156.061 42.8536C156.061 43.1738 156.336 43.311 156.748 43.311C157.434 43.311 157.892 42.9451 157.892 42.3048V42.1676H157.846Z" fill="white"/>
                            <path d="M163.294 43.9058V38.4634H164.027V43.9058H163.294Z" fill="white"/>
                        </svg>                            
                    </div>
                    <div class="desc">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
                    </div>
                    <div class="social">
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6875 10.5C19.6875 15.3438 16.1328 19.3672 11.4844 20.0703V13.3125H13.75L14.1797 10.5H11.4844V8.70312C11.4844 7.92188 11.875 7.17969 13.0859 7.17969H14.2969V4.79688C14.2969 4.79688 13.2031 4.60156 12.1094 4.60156C9.92188 4.60156 8.47656 5.96875 8.47656 8.39062V10.5H6.01562V13.3125H8.47656V20.0703C3.82812 19.3672 0.3125 15.3438 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5Z" fill="white"/>
                            </svg>
                        </span>
                        <span><svg width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9297 4.4375C17.9297 4.63281 17.9297 4.78906 17.9297 4.98438C17.9297 10.4141 13.8281 16.625 6.28906 16.625C3.94531 16.625 1.79688 15.9609 0 14.7891C0.3125 14.8281 0.625 14.8672 0.976562 14.8672C2.89062 14.8672 4.64844 14.2031 6.05469 13.1094C4.25781 13.0703 2.73438 11.8984 2.22656 10.2578C2.5 10.2969 2.73438 10.3359 3.00781 10.3359C3.35938 10.3359 3.75 10.2578 4.0625 10.1797C2.1875 9.78906 0.78125 8.14844 0.78125 6.15625V6.11719C1.32812 6.42969 1.99219 6.58594 2.65625 6.625C1.52344 5.88281 0.820312 4.63281 0.820312 3.22656C0.820312 2.44531 1.01562 1.74219 1.36719 1.15625C3.39844 3.61719 6.44531 5.25781 9.84375 5.45312C9.76562 5.14062 9.72656 4.82812 9.72656 4.51562C9.72656 2.25 11.5625 0.414062 13.8281 0.414062C15 0.414062 16.0547 0.882812 16.8359 1.70312C17.7344 1.50781 18.6328 1.15625 19.4141 0.6875C19.1016 1.66406 18.4766 2.44531 17.6172 2.95312C18.4375 2.875 19.2578 2.64062 19.9609 2.32812C19.4141 3.14844 18.7109 3.85156 17.9297 4.4375Z" fill="white"/>
                            </svg>
                        </span>
                        <span><svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.75 5.00781C12.2109 5.00781 14.2422 7.03906 14.2422 9.5C14.2422 12 12.2109 13.9922 9.75 13.9922C7.25 13.9922 5.25781 12 5.25781 9.5C5.25781 7.03906 7.25 5.00781 9.75 5.00781ZM9.75 12.4297C11.3516 12.4297 12.6406 11.1406 12.6406 9.5C12.6406 7.89844 11.3516 6.60938 9.75 6.60938C8.10938 6.60938 6.82031 7.89844 6.82031 9.5C6.82031 11.1406 8.14844 12.4297 9.75 12.4297ZM15.4531 4.85156C15.4531 4.26562 14.9844 3.79688 14.3984 3.79688C13.8125 3.79688 13.3438 4.26562 13.3438 4.85156C13.3438 5.4375 13.8125 5.90625 14.3984 5.90625C14.9844 5.90625 15.4531 5.4375 15.4531 4.85156ZM18.4219 5.90625C18.5 7.35156 18.5 11.6875 18.4219 13.1328C18.3438 14.5391 18.0312 15.75 17.0156 16.8047C16 17.8203 14.75 18.1328 13.3438 18.2109C11.8984 18.2891 7.5625 18.2891 6.11719 18.2109C4.71094 18.1328 3.5 17.8203 2.44531 16.8047C1.42969 15.75 1.11719 14.5391 1.03906 13.1328C0.960938 11.6875 0.960938 7.35156 1.03906 5.90625C1.11719 4.5 1.42969 3.25 2.44531 2.23438C3.5 1.21875 4.71094 0.90625 6.11719 0.828125C7.5625 0.75 11.8984 0.75 13.3438 0.828125C14.75 0.90625 16 1.21875 17.0156 2.23438C18.0312 3.25 18.3438 4.5 18.4219 5.90625ZM16.5469 14.6562C17.0156 13.5234 16.8984 10.7891 16.8984 9.5C16.8984 8.25 17.0156 5.51562 16.5469 4.34375C16.2344 3.60156 15.6484 2.97656 14.9062 2.70312C13.7344 2.23438 11 2.35156 9.75 2.35156C8.46094 2.35156 5.72656 2.23438 4.59375 2.70312C3.8125 3.01562 3.22656 3.60156 2.91406 4.34375C2.44531 5.51562 2.5625 8.25 2.5625 9.5C2.5625 10.7891 2.44531 13.5234 2.91406 14.6562C3.22656 15.4375 3.8125 16.0234 4.59375 16.3359C5.72656 16.8047 8.46094 16.6875 9.75 16.6875C11 16.6875 13.7344 16.8047 14.9062 16.3359C15.6484 16.0234 16.2734 15.4375 16.5469 14.6562Z" fill="white"/>
                            </svg>
                        </span>
                        <span><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.375 10.5C19.375 15.8516 15.0391 20.1875 9.6875 20.1875C8.67188 20.1875 7.69531 20.0703 6.79688 19.7578C7.1875 19.1328 7.77344 18.0781 8.00781 17.2188C8.125 16.7891 8.59375 14.9141 8.59375 14.9141C8.90625 15.5391 9.84375 16.0469 10.8203 16.0469C13.75 16.0469 15.8594 13.3516 15.8594 10.0312C15.8594 6.82812 13.2422 4.40625 9.88281 4.40625C5.70312 4.40625 3.47656 7.21875 3.47656 10.2656C3.47656 11.7109 4.21875 13.4688 5.42969 14.0547C5.625 14.1328 5.74219 14.0938 5.78125 13.8984C5.78125 13.7812 5.97656 13.1172 6.05469 12.8047C6.05469 12.7266 6.05469 12.6094 5.97656 12.5312C5.58594 12.0625 5.27344 11.1641 5.27344 10.3047C5.27344 8.19531 6.875 6.125 9.64844 6.125C11.9922 6.125 13.6719 7.72656 13.6719 10.0703C13.6719 12.6875 12.3438 14.4844 10.625 14.4844C9.6875 14.4844 8.98438 13.7031 9.17969 12.7656C9.45312 11.5938 10 10.3438 10 9.52344C10 8.78125 9.60938 8.15625 8.78906 8.15625C7.8125 8.15625 7.03125 9.17188 7.03125 10.5C7.03125 11.3594 7.30469 11.9453 7.30469 11.9453C7.30469 11.9453 6.36719 16.0078 6.17188 16.75C5.97656 17.6094 6.05469 18.7812 6.13281 19.5234C2.53906 18.1172 0 14.6406 0 10.5C0 5.14844 4.33594 0.8125 9.6875 0.8125C15.0391 0.8125 19.375 5.14844 19.375 10.5Z" fill="white"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="right">
                    <div class="one">
                        <div class="title">Liens rapides</div>
                        <div class="links">
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span><a href="/">Accueil</a></span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span><a href="/propos">À propos</a></span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span><a href="/services">Nos Services</a></span>
                            </div>
                        </div>
                    </div>
                    <div class="two">
                        <div class="title">Liens connexes</div>
                        <div class="links">
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span>Privacy Policy</span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span>Disclaimer</span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span>Terms & Condition</span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span>GDPR</span>
                            </div>
                            <div>
                                <span><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.60938 1.14062L7.60938 6.10156C7.84375 6.375 8 6.6875 8 7C8 7.27344 7.84375 7.625 7.60938 7.85938L2.60938 12.8203C2.25781 13.1719 1.71094 13.2891 1.24219 13.0938C0.773438 12.8984 0.5 12.5078 0.5 12V2C0.5 1.53125 0.773438 1.0625 1.24219 0.867188C1.71094 0.671875 2.25781 0.789062 2.60938 1.14062Z" fill="white"/>
                                </svg>
                                </span>
                                <span>Cookies Used</span>
                            </div>
                        </div>
                    </div>
                    <div class="three">
                        <div class="title"><a href="/contact">Contactez-nous</a></div>
                        <div class="links">
                            <div>
                                <span>
                                    <svg width="12" height="21" viewBox="0 0 12 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.5 6.125C11.5 9.25 8.96094 11.75 5.875 11.75C2.75 11.75 0.25 9.25 0.25 6.125C0.25 3.03906 2.75 0.5 5.875 0.5C8.96094 0.5 11.5 3.03906 11.5 6.125ZM6.5 3C6.5 2.6875 6.1875 2.375 5.875 2.375C3.76562 2.375 2.125 4.05469 2.125 6.125C2.125 6.47656 2.39844 6.75 2.75 6.75C3.0625 6.75 3.375 6.47656 3.375 6.125C3.375 4.75781 4.46875 3.625 5.875 3.625C6.1875 3.625 6.5 3.35156 6.5 3ZM4.625 19.25V12.9219C5.01562 12.9609 5.44531 13 5.875 13C6.26562 13 6.69531 12.9609 7.125 12.9219V19.25C7.125 19.9531 6.53906 20.5 5.875 20.5C5.17188 20.5 4.625 19.9531 4.625 19.25Z" fill="white"/>
                                    </svg>                                        
                                </span>
                                <span>Alger, Algérie</span>
                            </div>
                            <div>
                                <span>
                                    <svg width="20" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18.125 0C19.1406 0 20 0.859375 20 1.875C20 2.5 19.6875 3.04688 19.2188 3.39844L10.7422 9.76562C10.2734 10.1172 9.6875 10.1172 9.21875 9.76562L0.742188 3.39844C0.273438 3.04688 0 2.5 0 1.875C0 0.859375 0.820312 0 1.875 0H18.125ZM8.47656 10.7812C9.375 11.4453 10.5859 11.4453 11.4844 10.7812L20 4.375V12.5C20 13.9062 18.8672 15 17.5 15H2.5C1.09375 15 0 13.9062 0 12.5V4.375L8.47656 10.7812Z" fill="white"/>
                                    </svg>        
                                </span>
                                <span>Contact@gec.com</span>
                            </div>
                            <div>
                                <span>
                                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 0.75C16.3672 0.75 17.5 1.88281 17.5 3.25V15.75C17.5 17.1562 16.3672 18.25 15 18.25H2.5C1.09375 18.25 0 17.1562 0 15.75V3.25C0 1.88281 1.09375 0.75 2.5 0.75H15ZM13.7109 12.0781C13.7891 11.8047 13.6328 11.4922 13.3594 11.375L11.25 10.4766C10.9766 10.3594 10.7031 10.4375 10.5469 10.6328L9.6875 11.6875C8.32031 11.0234 7.22656 9.92969 6.5625 8.5625L7.61719 7.70312C7.8125 7.54688 7.89062 7.27344 7.77344 7L6.875 4.89062C6.75781 4.61719 6.44531 4.46094 6.17188 4.53906L4.21875 4.96875C3.94531 5.04688 3.75 5.28125 3.75 5.59375C3.75 10.5156 7.73438 14.5 12.6562 14.5C12.9688 14.5 13.2031 14.3438 13.2422 14.0312L13.7109 12.0781Z" fill="white"/>
                                    </svg>                                               
                                </span>
                                <span>( +213 ) 123 456 789</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="down">Allright Reserved - GEC INTERNATIONAL</div>
        </div>
    </footer>
  )
}

export default Footer