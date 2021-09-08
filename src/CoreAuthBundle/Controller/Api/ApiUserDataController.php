<?php

namespace App\CoreAuthBundle\Controller\Api;

use App\CoreAbstractBundle\Controller\BaseAbstractController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiUserDataController extends BaseAbstractController
{

    /**
     * @Route("api/all", name="api_all",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function allAction(Request $request)
    {
        return new JsonResponse(["data" =>  "home", "message" => ""], 200);
    }

    /**
     * @Route("api/user", name="api_user",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function userAction(Request $request)
    {
        $profile = $this->getCurrentProfile();
        return new JsonResponse(["data" =>  $profile->getId(), "message" => ""], 200);
    }

    /**
     * @Route("api/mod", name="api_mod",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function modAction(Request $request)
    {
        return new JsonResponse(["data" =>  "mod", "message" => ""], 200);
    }

    /**
     * @Route("api/admin", name="api_admin",  methods={"GET"})
     * @param Request $request
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function adminAction(Request $request)
    {
        return new JsonResponse(["data" =>  "admin", "message" => ""], 200);
    }

}
