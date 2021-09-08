<?php

namespace App\CoreAuthBundle\Entity;

use Symfony\Component\Security\Core\User\UserInterface;
/**
 * @author Nur Hidayatullah <kematjaya0@gmail.com>
 */
interface KmjUserEmailInterface extends UserInterface
{
    const ROLE_USER = "ROLE_USER";
    const ROLE_ADMINISTRATOR = "ROLE_ADMINISTRATOR";
    const ROLE_SUPER_USER = "ROLE_SUPER_USER";

    public function setName(string $name): self;

    public function getName(): ?string;

    public function setIsActive(bool $is_active): self;

    public function getIsActive(): ?bool;

    public function setPassword(string $password): self;

    public function setRoles(array $roles): KmjUserEmailInterface;

    public function setUsername(string $username):self;
}
