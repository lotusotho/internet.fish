import { useEffect, useState } from "react"
import useSound from 'use-sound'

const popUrl = 'https://fhwnbllukedrpyjnjofv.supabase.co/storage/v1/object/public/assets/pop.mp3';

export const App = () => {
    return (
        <>
            <h1 className="main-title-page">Internet.Fish</h1>
            {ClickHandler()}
        </>
    )
}

const ClickHandler = () => {
    const [score, setScore] = useState(0);

    const [play] = useSound(popUrl, { playbackRate: 1.0 });


    useEffect(() => {
        setScore(parseInt(localStorage.getItem("fishScore") ?? "0"));
    }, [])

    return (
        <>
            <div className="main-fish">
                <a onClick={() => {
                    setScore(score + 1);
                    localStorage.setItem("fishScore", `${score + 1}`);

                    play({ playbackRate: Math.random() })
                }
                }>🐟</a>
                <p>You have <span className="main-title-page-featured">fished</span> {ChangeScore(score)} times!</p>

            </div>
        </>
    )
}

function ChangeScore(score: number) {
    if (score !== 0 && score % 100 === 0) {
        return (
            <div key={score} className="main-fish-highscore">
                {score}
            </div>
        )
    } else {
        return (
            <div key={score} className="main-fish-score">
                {score}
            </div>
        )
    }
}