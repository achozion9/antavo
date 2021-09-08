<?php

namespace App\CoreAuthBundle\Controller\Api;

use Doctrine\DBAL\DBALException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use App\CoreAuthBundle\Entity\Profile;
use Kematjaya\UserBundle\Entity\DefaultUser;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Validation;
use Symfony\Component\Validator\Constraints as Assert;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\Security\Core\User\UserInterface;
use Lexik\Bundle\JWTAuthenticationBundle\Services\JWTTokenManagerInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use App\CoreAbstractBundle\Controller\BaseAbstractController;

/**
 * @Route("/auth")
 */
class ApiAuthController extends BaseAbstractController
{

    /**
     * @Route("/register", name="api_auth_register",  methods={"POST"})
     * @param Request $request
     * @return JsonResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function registerAction(Request $request, UserPasswordEncoderInterface $encoder)
    {
        $entityManager = $this->getDoctrine()->getManager();

        $data = json_decode(
            $request->getContent(),
            true
        );

        $validator = Validation::createValidator();

        $constraint = new Assert\Collection(array(
            'username' => new Assert\Length(array('min' => 1)),
            'password' => new Assert\Length(array('min' => 1)),
            'email' => new Assert\Email(),
        ));

        $violations = $validator->validate($data, $constraint);

        if ($violations->count() > 0) {
            return new JsonResponse(["error" => (string)$violations], 500);
        }

        $username = $data['email'];
        $name = $data['username'];
        $password = $data['password'];
        $email = $data['email'];
        $user = new Profile();

        try {
            $user
                ->setUsername($username)
                ->setName($name)
                ->setPassword($encoder->encodePassword($user, $password))
                ->setRoles(['ROLE_USER'])
                ->setEmail($email)
                ->setIsActive(true)
            ;

            $entityManager->persist($user);
            $entityManager->flush();
            $entityManager->clear();

        } catch(DBALException $e){
            return new JsonResponse(["error" => "Email is already in use", "message" => "Email is already in use"], 500);

        } catch (\Exception $e) {
            return new JsonResponse(["error" => "registration fail, an error occur via the registration process", "message" => "An error has occured via the registration process"], 500);
        }

        return new JsonResponse(["success" => $user->getUsername(). " has been registered!", "message" => "Profile registered successfully!"], 200);
    }
}
