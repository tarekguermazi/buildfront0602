import React from 'react'
import styled from 'styled-components'

export default function Content() {
    return (
        <ContentLayout>
            <p className='frenchVersion'>
                Plateforme interactive visant à collecter et documenter toute matière digitale se rapportant aux
                mouvements sociaux et à l'action sociale et citoyenne en général, leur histoire et dynamiques
                actuelles, et ce de différentes sources dont principalement le Forum Tunisien pour les Droits
                Économiques et Sociaux et ses partenaires. La Plateforme a pour objectifs de mettre l'accent sur
                l'espace digital comme espace d'action sociale et de suivre ses dynamiques et interaction avec l'espace
                public physique. Elle cherche ainsi à se positionner comme un pont entre ces deux espaces
                complémentaires. La Plateforme offre une matière digitale variée à tous les acteurs intéressés par les
                droits humains et les libertés en Tunisie et dans la région afin d'en faire bon usage pour de la recherche
                scientifique et du travail journalistique ainsi que la production artistique. Cette matière est ainsi
                disponible à toutes et à tous pour relecture et analyse dans le but d'enrichir le débat public et
                d'appuyer une culture de dialogue constructif basé sur l'évidence scientifique et l'argumentaire
                structuré à potentiel de changement positif et d'impact. La Plateforme porte également l'objectif de
                rompre avec le discours de stigmatisation des acteurs sociaux et citoyens. Elle offre de même des
                outils interactifs pour ses membres afin de leur permettre de participer à la production du contenu,
                au monitoring, et à l'échange. Une application mobile est disponible pour un accès rapide et ciblé à
                l'information en temps réel.
            </p>

            <p className='arabicVersion'>
                منصة الكترونية تفاعلية تهدف الى جمع وتوثيق مواد رقمية تعنى أساسا بالحركات الإجتماعية» تاربخها وحاضرها وديناميكيتاهاء من مصادر مختلفة
                انطلاقا من عمل المنتدى التونسي للحقوق الاقتصادية والاجتماعية وشركائه الاجتماعيين والمدنيين.

                تسى البوابة الى تسليط الضوء على المجال الرقمي كمجال للفعل الاجتماعي ومتابعة دينامياكياته وتداخله مع المجال العام المادي لتكون بذلك حلقة
                وصل بين المجالين. وتوفر البوابة هذه المواد الرقمية لجميع الفاعلين والفاعلات المهتمين بالشأن العام وبمناصرة الحقوق والحريات في تونس
                والمنطقة بهدف اعتمادها للبحث العلمي والعمل الصحفي والمدني والانتاج الفني وغيرها من مجالات توظيف هذه المادة لإعادة قراءتها وتحليلها بما
                يثري النقاش العام ويساهم في دعم ثقافة الحوار المبني على الحجة والمعلومة الدقيقة قصد التأثير والتغيير والقطع مع خطاب الوصم المسلط على
                الفاعلين والفاعلات الاجتماعيين. كما تتضمن البوابة أدوات تفاعلية تتيح للمستعمليها امكانية المشاركة في اثراء المحتوى والتفاعل المباشر والتشبيك
                وترتبط بتطبيق إلكتروني متعدد المهام والاستعمالات.
            </p>
        </ContentLayout>
    )
}


const ContentLayout = styled.section`
  max-width: 100%;
  margin: 2rem auto;

  p{
    font-size: 1rem;
    line-height: 1.5;
    color: var(--violet);
    text-align: justify;
    margin-bottom: 2rem;
  }

  .arabicVersion{
    direction: rtl;
  }
`;