<?php

namespace App\CoreAbstractBundle\Controller;

use App\CoreAuthBundle\Service\ProfileService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

abstract class BaseAbstractController extends AbstractController
{
    /**
     * @var ProfileService
     */
    protected $profileService;

    /**
     * BaseAbstractController constructor.
     * @param ProfileService $profileService
     */
    public function __construct(ProfileService $profileService)
    {
        $this->profileService = $profileService;
    }

    public function getCurrentProfile()
    {
        return $this->profileService->getCurrentProfile();
    }

    protected function getAuthUser()
    {
        return $this->container->get('security.token_storage')->getToken()->getUser();
    }
}
