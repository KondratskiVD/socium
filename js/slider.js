$(document).ready(function(){
    // MODAL
    $('.open-order').on("click", () => {
        $('#modal-layout').removeClass('hidden');
        $('#modal-order').removeClass('hidden');
    })
    $('#modal-layout').on("click", () => {
        $('#modal-layout').addClass('hidden');
        $('#modal-order').addClass('hidden');
    })
    // SENT FORM
    $('#form-order').submit((e) => {
        e.preventDefault();
        $('#toast-success').removeClass('hidden')
        setTimeout(() => {
            $('#toast-success').addClass('hidden')
        }, 3000)
        const userNameForm = $('#userNameForm').val();
        const userPhoneForm = $('#userPhoneForm').val();
        if(!(userNameForm && userPhoneForm)) {
            $('#toast-error').removeClass('hidden')
            setTimeout(() => {
                $('#toast-error').addClass('hidden')
            }, 3000)
        } else {
            const sentDataForm = async () => {
                $('.spinner').removeClass('hidden')
                await db.collection('orders')
                    .add({
                        userName: userNameForm,
                        userPhone: userPhoneForm,
                    })
                $('.spinner').addClass('hidden');
                $('#userNameForm').val('');
                $('#userPhoneForm').val('');
                $('#toast-success').removeClass('hidden')
                setTimeout(() => {
                    $('#toast-success').addClass('hidden')
                }, 3000)
            }
            sentDataForm()
        }
    })

    $('#close-button').on('click', () => {
        $('#modal-layout').addClass('hidden');
        $('#modal-order').addClass('hidden');
    })
    $('#dialog-form').submit((e) => {
        e.preventDefault();
        const userName = $('#userName').val();
        const userPhone = $('#userPhone').val();
        if(!(userName && userPhone)) {
            $('#toast-error').removeClass('hidden')
            setTimeout(() => {
                $('#toast-error').addClass('hidden')
            }, 3000)
        } else {
            const sentData = async () => {
                $('.spinner').removeClass('hidden')
                await db.collection('orders')
                    .add({
                        userName,
                        userPhone,
                    })
                $('.spinner').addClass('hidden');
                $('#modal-layout').addClass('hidden');
                $('#modal-order').addClass('hidden');
                $('#userName').val('');
                $('#userPhone').val('');

                $('#toast-success').removeClass('hidden')
                setTimeout(() => {
                    $('#toast-success').addClass('hidden')
                }, 3000)
            }
            sentData()
        }

    })

    // SLIDERS
    const sliderConfig = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        prevArrow:'<span class="slider-arrow"><i class="fas fa-chevron-left"></i></span>',
        nextArrow:'<span class="slider-arrow"><i class="fas fa-chevron-right"></i></span>',
        autoplaySpeed: 2000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    fade: true,
                    arrows: true,
                    centerMode: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    fade: false,
                    arrows: false,
                    arrows: true,
                    slidesToShow: 2,
                }
            }
        ]
    }

    $('.slider_class').slick({
        ...sliderConfig,
        appendArrows:'.slider-arrows'
    });

    $('.slider_authors').slick({
        ...sliderConfig,
        appendArrows:'.slider-arrows-2'
    });
});
