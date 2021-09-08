<?php

namespace App\CoreAuthBundle\Service;

use App\CoreAuthBundle\Entity\Profile;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;

class ProfileService
{
    /**
     * @var TokenStorageInterface
     */
    private $tokenStorage;

    /**
     * @param TokenStorageInterface  $storage
     */
    public function __construct(TokenStorageInterface $storage) {
        $this->tokenStorage = $storage;
    }

    /**
     * @return Profile|null
     */
    public function getCurrentProfile()
    {
        $token = $this->tokenStorage->getToken();
        if ($token instanceof TokenInterface) {

            /** @var Profile $profile */
            $profile = $token->getUser();
            return $profile;

        } else {
            return null;
        }
    }
}
