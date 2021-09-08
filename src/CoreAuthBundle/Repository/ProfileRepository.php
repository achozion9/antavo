<?php

namespace App\CoreAuthBundle\Repository;

use App\CoreAuthBundle\Entity\Profile;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Kematjaya\UserBundle\Entity\KmjUser;
use Symfony\Bridge\Doctrine\Security\User\UserLoaderInterface;
use Doctrine\Persistence\ManagerRegistry;

class ProfileRepository extends ServiceEntityRepository implements UserLoaderInterface
{
    public function __construct(ManagerRegistry $registry, string $entityClass = null)
    {
        $entityClass = null === $entityClass ? Profile::class : $entityClass;
        parent::__construct($registry, $entityClass);
    }

    // The loadUserByIdentifier() method was introduced in Symfony 5.3.
    // In previous versions it was called loadUserByUsername()
    public function loadUserByIdentifier(string $usernameOrEmail): ?Profile
    {
        $entityManager = $this->getEntityManager();

        return $entityManager->createQuery(
            'SELECT p
                FROM App\CoreAuthBundle\Entity\Profile p
                WHERE p.username = :query
                OR p.email = :query'
        )
            ->setParameter('query', $usernameOrEmail)
            ->getOneOrNullResult();
    }

    public function loadUserByUsername(string $usernameOrEmail)
    {

    }
}
