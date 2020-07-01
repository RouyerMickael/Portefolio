<?php

    function sendMail($post){
        
        if(isset($post)){

            $message='
            <html>
                <body>
                    <div align="center">
                        <p>FROM PORTEFOLIO</p>
                        <br />
                        <u>Nom de l\'expéditeur : </u>'.$post['name'].'</ul>
                        <u>Mail de l\'expéditeur : </u>'.$post['email'].'</ul>
                        <br />
                        '.nl2br($post['message']).'
                        <br />
                        <img src="http://www.primfx.com/mailing/separation.png"/>
                    </div>
                </body>
            </html>
            ';

            $test = mail("mickael.rouyer@outlook.fr", $post['title'], $message);
            echo '<h4>Message envoyé !</h4>';

            var_dump($test);
        }



    }

?>