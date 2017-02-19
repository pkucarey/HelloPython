floyd init fast-style-transfer
floyd run --gpu --env keras:py2 --data jq4ZXUCSVer4t65rWeyieG "python style.py --style examples/style/la_muse.jpg --base-model-path /input/pre-trained-tf/la_muse.ckpt --epoch 1 --total-iterations 10 --checkpoint-dir /output"

