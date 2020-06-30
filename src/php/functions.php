<?php

    function sendMail($post){
        
        if(isset($_POST['mailform']))
            $header="MIME-Version: 1.0\r\n";
            $header.='From:"PrimFX.com"<support@primfx.com>'."\n";
            $header.='Content-Type:text/html; charset="uft-8"'."\n";
            $header.='Content-Transfer-Encoding: 8bit';

            $message='
            <html>
                <body>
                    <div align="center">
                        <p>FROM PORTEFOLIO</p>
                        <br />
                        <u>Nom de l\'expéditeur : </u>'.$_POST['name'].'</ul>
                        <u>Mail de l\'expéditeur : </u>'.$_POST['email'].'</ul>
                        <br />
                        '.nl2br($_POST['message']).'
                        <br />
                        <img src="http://www.primfx.com/mailing/separation.png"/>
                    </div>
                </body>
            </html>
            ';

            mail("mickael.rouyer@epitech.eu", $_POST['title'], $message, $header);
        }

        
        var_dump($post);

        echo '<h4>Message envoyé !';

    }

?>