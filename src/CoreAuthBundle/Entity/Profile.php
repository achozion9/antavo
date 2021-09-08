<?php

namespace App\CoreAuthBundle\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\Mapping as ORM;
use Kematjaya\UserBundle\Entity\KmjUser;
use Kematjaya\UserBundle\Entity\KmjUserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Table(name="profile")
 * @ORM\Entity(repositoryClass=ProfileRepository::class)

 * @package Kematjaya\UserBundle\Entity
 *
 * @UniqueEntity(
 *     fields={"email"},
 *     errorPath="email",
 *     message="Email is already in use."
 * )
 */
class Profile extends KmjUser implements KmjUserInterface, \Serializable
{
    /**
     * @var string
     *
     * @Assert\NotBlank()
     * @Assert\Length(max="255")
     * @Assert\Email
     *
     * @ORM\Column(type="string", length=255, unique=true)
     */
    private $email;

    /**
     *
     * @var string
     */
    private $single_role;

    /**
     * @ORM\Column(name="is_active" type="boolean")
     */
    private $is_active;

    /**
     * @ORM\Column(type="json")
     */
    private $roles = [];

    public function __construct()
    {

    }

    public function getUserIdentifier()
    {
        return $this->getUsername();
    }

    public function getSingleRole(): string
    {
        $roles = $this->getRoles();

        return end($roles);
    }

    public function setSingleRole(string $single_role):self
    {
        $this->single_role = $single_role;

        $this->setRoles([$single_role]);

        return $this;
    }

    public function getRoles(): ?array
    {
        return $this->roles;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function getIsActive(): ?bool
    {
        return $this->is_active;
    }

    public function setIsActive(bool $is_active): KmjUserInterface
    {
        $this->is_active = $is_active;

        return $this;
    }

    /**
     * @see \Serializable::serialize()
     */
    public function serialize()
    {
        return serialize(array(
            $this->email,
        ));
    }

    /**
     * @see \Serializable::unserialize()
     */
    public function unserialize($serialized)
    {
        list (
            $this->email,
            ) = unserialize($serialized);
    }

    public function getProfileTypes()
    {
        return $this->profileTypes->toArray();
    }
}
