const { registerBlockType } = wp.blocks;
const { createElement: el } = wp.element;

// تسجيل البلوك
registerBlockType("myplugin/login-modal", {
    title: "Login Modal",
    icon: "admin-users",
    category: "widgets",

    // دالة edit
    edit: () => {
        // عرض رسالة بسيطة فقط في المحرر
        return el("p", null, "This block will only display on the frontend.");
    },

    // دالة save لعرض البلوك في الواجهة الأمامية فقط
    save: () => {
        return el(
            "div",
            { className: "login-modal-wrapper" },
            el(
                "button",
                {
                    className: "btn btn-primary login-modal-toggle",
                    type: "button",
                },
                "Open Login Modal"
            ),
            el(
                "div",
                {
                    className: "login-modal",
                    style: {
                        display: "none",
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0, 0, 0, 0.5)",
                        zIndex: "1000",
                    },
                },
                el(
                    "div",
                    {
                        className: "login-modal-content",
                        style: {
                            margin: "15% auto",
                            padding: "20px",
                            backgroundColor: "#fff",
                            width: "300px",
                            borderRadius: "5px",
                        },
                    },
                    el("h3", null, "Login"),
                    el(
                        "form",
                        {
                            className: "login-form",
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "10px",
                            },
                        },
                        el("input", {
                            type: "text",
                            name: "username",
                            placeholder: "Username",
                            style: {
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            },
                        }),
                        el("input", {
                            type: "password",
                            name: "password",
                            placeholder: "Password",
                            style: {
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            },
                        }),
                        el(
                            "button",
                            {
                                type: "submit",
                                className: "btn btn-primary",
                                style: {
                                    padding: "10px",
                                    border: "none",
                                    borderRadius: "5px",
                                    backgroundColor: "#007bff",
                                    color: "#fff",
                                    cursor: "pointer",
                                },
                            },
                            "Login"
                        )
                    )
                )
            )
        );
    },
});

// دالة للتفاعل مع المودال والـ AJAX
document.addEventListener("DOMContentLoaded", () => {
    const modalToggle = document.querySelector(".login-modal-toggle");
    const modal = document.querySelector(".login-modal");

    if (modalToggle && modal) {
        modalToggle.addEventListener("click", () => {
            modal.style.display = "block";
        });

        const modalClose = modal.querySelector(".login-modal-close");
        if (modalClose) {
            modalClose.addEventListener("click", () => {
                modal.style.display = "none";
            });
        }

        const loginForm = modal.querySelector(".login-form");
        if (loginForm) {
            loginForm.addEventListener("submit", (e) => {
                e.preventDefault();

                const username = e.target.querySelector('input[name="username"]').value;
                const password = e.target.querySelector('input[name="password"]').value;

                fetch(myplugin_ajax_object.ajax_url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        action: "user_login",
                        username: username,
                        password: password,
                        security: myplugin_ajax_object.nonce, // تمرير nonce للحماية
                    }),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.success) {
                            alert(data.data.message);
                            modal.style.display = "none";
                            window.location.href = data.data.redirect_url;
                        } else {
                            alert(data.data.message);
                        }
                    })
                    .catch((error) => {
                        alert("An error occurred. Please try again.");
                    });
            });
        }
    }
});
