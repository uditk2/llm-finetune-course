# LLM Fine-Tuning Course (Greedy Path)

This repo contains a self-paced course on fine-tuning LLMs using a greedy learning path: at each step we pick the next lesson that maximizes learning gain for your current ability, time, and goals.

## Repo Structure
- `COURSE.md` - course design, north star, greedy path rules
- `lessons/` - lesson content and audio scripts
- `assessments/` - question papers and rubrics
- `assets/audio/` - generated audio files (optional)
- `progress/` - learner profile and checkpoints

## How We Use This
1. Read `COURSE.md` to see the north star and greedy decision rules.
2. Complete `lessons/lesson_01.md` and optionally listen to `lessons/lesson_01_audio_script.txt`.
3. Answer `assessments/lesson_01_questions.md`.
4. I will score your answers and choose the next lesson using the greedy algorithm.

## Audio Note
Audio files are optional. We can generate them locally if we install a TTS engine. See `COURSE.md` for options.

## Website (GitHub Pages)
This repo is GitHub Pages friendly using Jekyll (theme: `minima`).

Local profile and progress are stored in the browser (localStorage). Export JSON from the site and paste into `progress/learning_profile.md` or share in chat so the agent can adapt.

## GitHub Pages Setup
1. In GitHub repo settings, enable Pages.
2. Source: `main` branch, root.
3. Site will publish with Jekyll using the `minima` theme.
