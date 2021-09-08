<?php

namespace App\CoreAuthBundle\EventListener;

use Lexik\Bundle\JWTAuthenticationBundle\Event\AuthenticationSuccessEvent;
use Symfony\Component\Security\Core\User\UserInterface;

class AuthenticationSuccessListener
{
    /**
     * @param AuthenticationSuccessEvent $event
     */
    public function onAuthenticationSuccessResponse(AuthenticationSuccessEvent $event)
    {
        $data = $event->getData();
        $user = $event->getUser();

        if (!$user instanceof UserInterface) {
            return;
        }

        $data['roles'] = $user->getRoles();
        $data['accessToken'] = $data["token"];
        $data['id'] = $user->getId();
        $data['username'] = $user->getUsername();
        $data['displayName'] = $user->getUsername();
        $data['photoURL'] = "https://www.unmc.edu/cihc/_images/faculty/default.jpg";
        $data['email'] = $user->getEmail();
        unset($data['token']);

        $event->setData($data);
    }
}
