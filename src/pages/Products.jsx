import React from 'react';
import styled from 'styled-components';

function Products() {
    const Div = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 15px;
        min-height: 100vh;
        background-image: url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
        background-size: cover;
        background-repeat: no-repeat;
        padding: 20px;

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 10px;
            padding: 15px;
        }

        @media (max-width: 480px) {
            padding: 10px;
        }
    `;

    const ProductCard = styled.div`
        background: rgba(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        text-align: center;
        padding: 20px;
        max-width: 300px;
        

        @media (max-width: 768px) {
            padding: 15px;
            max-width: 80%;
        }

        @media (max-width: 480px) {
            padding: 10px;
        }
    `;

    const ProductImage = styled.img`
        width: 100%;
        height: 200px;
        
        border-radius: 10px;
    `;

    const ProductTitle = styled.h1`
        font-size: 1.5rem;
        margin: 10px 0;
        color: #333;

        @media (max-width: 768px) {
            font-size: 1.3rem;
        }

        @media (max-width: 480px) {
            font-size: 1.2rem;
        }
    `;

    const ProductDescription = styled.p`
        font-size: 1rem;
        color: #555;
        margin-top: 10px;

        @media (max-width: 768px) {
            font-size: 0.9rem;
        }

        @media (max-width: 480px) {
            font-size: 0.8rem;
        }
    `;

    return (
        <Div>
            <ProductCard>
                <ProductImage src="https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=1024x1024&w=is&k=20&c=q2bJOBlZOSptjYSzQ83_QYEz6obvZk-P1YLJGko1pX0=" alt="Cricket Bat" />
                <ProductTitle>Cricket Bat</ProductTitle>
                <ProductDescription>
                    This is the bat which is preferred by many international cricketers to hit massive sixes.
                </ProductDescription>
            </ProductCard>
            <ProductCard>
                <ProductImage src="https://nwscdn.com/media/catalog/product/cache/h700xw700/c/r/cricket-club-ball-family_1.jpg" alt="Cricket Ball" />
                <ProductTitle>Cricket Ball</ProductTitle>
                <ProductDescription>
                    This is a ball which will be interlinked with Neuralink and spins as you think.
                </ProductDescription>
            </ProductCard>
            <ProductCard>
                <ProductImage src="https://www.livemint.com/lm-img/img/2024/11/12/600x338/best_badminton_racket_1731392114857_1731392137197.webp" alt="Racket" />
                <ProductTitle>Racket</ProductTitle>
                <ProductDescription>
                    This is a racket which will produce a boost when you want to give a smash.
                </ProductDescription>
            </ProductCard>
        </Div>
    );
}

export default Products;
