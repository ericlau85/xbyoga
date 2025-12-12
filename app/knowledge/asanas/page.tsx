'use client';

import { useState } from 'react';
import { useLanguage } from '../../../lib/language-context';
import Navigation from '../../components/Navigation';
import SectionTabs from '../../components/SectionTabs';
import Footer from '../../components/Footer';

export default function AsanaPage() {
  const { language } = useLanguage();
  const [activeSection, setActiveSection] = useState<'list' | 'meanings'>('list');

  const asanaData = {
      en: {
        title: "Asanas",
        subtitle: "Ashtanga Yoga Asanas",
        intro: "Reference for partial asana sequences, including Sanskrit names, translations, and meanings. Through systematic sequence practice, cultivate physical strength and flexibility, guide balanced development of body and mind in the integration of breath and movement, achieving harmony and unity.",
        sections: {
          list: {
            title: "Asana List",
            content: "Practice sequences of partial Ashtanga Yoga asanas"
          },
          meanings: {
            title: "Asana Meanings",
            content: "Translation and etymological meaning analysis of Sanskrit names"
          }
        },
      asanas: [
        { devanagari: "समस्थितिः", sanskrit: "samasthitiḥ" },
        { devanagari: "सूर्य नमस्कार", sanskrit: "sūrya namaskāra" },
        { devanagari: "पादाङ्गुष्ठासन", sanskrit: "pādāṅguṣṭhāsana" },
        { devanagari: "पादहस्तासन", sanskrit: "pāda hastāsana" },
        { devanagari: "उत्थित त्रिकोणासन", sanskrit: "utthita trikoṇāsana" },
        { devanagari: "उत्थित पार्श्वकोणासन", sanskrit: "utthita pārśvakoṇāsana" },
        { devanagari: "प्रसारित पादोत्तानासन", sanskrit: "prasārita pādottānāsana" },
        { devanagari: "पार्श्वोत्तानासन", sanskrit: "pārśvottānāsana" },
        { devanagari: "उत्थितहस्त पादाङ्गुष्ठासन", sanskrit: "utthita hasta pādāṅguṣṭhāsana" },
        { devanagari: "अर्धबद्ध पद्मोत्तानासन", sanskrit: "ardha baddha padmottānāsana" },
        { devanagari: "उत्कटासन", sanskrit: "utkaṭāsana" },
        { devanagari: "वीरभद्रासन", sanskrit: "vīrabhadrāsana" },
        { devanagari: "दण्डासन", sanskrit: "daṇḍāsana" },
        { devanagari: "पश्चिमोत्तानासन", sanskrit: "paścimottānāsana" },
        { devanagari: "पूर्वोत्तानासन", sanskrit: "pūrvottānāsana" },
        { devanagari: "अर्धबद्धपद्म पश्चिमोत्तानासन", sanskrit: "ardha baddha padma paścimottānāsana" },
        { devanagari: "त्रियङ्गमुखैकपाद पश्चिमोत्तानासन", sanskrit: "triyaṅga mukhaikapāda paścimottānāsana" },
        { devanagari: "जानुशीर्षासन", sanskrit: "jānu śīrṣāsana" },
        { devanagari: "मरीच्यासन", sanskrit: "marīcyāsana" },
        { devanagari: "नावासन", sanskrit: "nāvāsana" },
        { devanagari: "भुजपीडासन", sanskrit: "bhuja pīḍāsana" },
        { devanagari: "कूर्मासन", sanskrit: "kūrmāsana" },
        { devanagari: "सुप्त कूर्मासन", sanskrit: "supta kūrmāsana" },
        { devanagari: "गर्भ पिण्डासन", sanskrit: "garbha piṇḍāsana" },
        { devanagari: "कुक्कुटासन", sanskrit: "kukkuṭāsana" },
        { devanagari: "बद्ध कोणासन", sanskrit: "baddha koṇāsana" },
        { devanagari: "उपविष्ट कोणासन", sanskrit: "upaviṣṭa koṇāsana" },
        { devanagari: "सुप्त कोणासन", sanskrit: "supta koṇāsana" },
        { devanagari: "सुप्त पादाङ्गुष्ठासन", sanskrit: "supta pādāṅguṣṭhāsana" },
        { devanagari: "उभय पादाङ्गुष्ठासन", sanskrit: "ubhaya pādāṅguṣṭhāsana" },
        { devanagari: "ऊर्ध्वमुख पश्चिमोत्तानासन", sanskrit: "ūrdhva mukha paścimottānāsana" },
        { devanagari: "सेतुबन्धासन", sanskrit: "setu bandhāsana" },
        { devanagari: "पाशासन", sanskrit: "pāśāsana" },
        { devanagari: "क्रौञ्चासन", sanskrit: "krauñcāsana" },
        { devanagari: "शलभासन", sanskrit: "śalabhāsana" },
        { devanagari: "भेकासन", sanskrit: "bhekāsana" },
        { devanagari: "धनुरासन", sanskrit: "dhanurāsana" },
        { devanagari: "पार्श्व धनुरासन", sanskrit: "pārśva dhanurāsana" },
        { devanagari: "उष्ट्रासन", sanskrit: "uṣṭrāsana" },
        { devanagari: "लघु वज्रासन", sanskrit: "laghu vajrāsana" },
        { devanagari: "कपोतासन", sanskrit: "kapotāsana" },
        { devanagari: "सुप्त वज्रासन", sanskrit: "supta vajrāsana" },
        { devanagari: "बकासन", sanskrit: "bakāsana" },
        { devanagari: "भरद्वाजासन", sanskrit: "bharadvājāsana" },
        { devanagari: "अर्ध मत्स्येन्द्रासन", sanskrit: "ardha matsyendrāsana" },
        { devanagari: "एक पाद शीर्षासन", sanskrit: "eka pāda śīrṣāsana" },
        { devanagari: "द्वि पाद शीर्षासन", sanskrit: "dvi pāda śīrṣāsana" },
        { devanagari: "योग निद्रासन", sanskrit: "yoga nidrāsana" },
        { devanagari: "टिट्टिभासन", sanskrit: "ṭiṭṭibhāsana" },
        { devanagari: "पिञ्छ मयूरासन", sanskrit: "piñcha mayūrāsana" },
        { devanagari: "कारण्डवासन", sanskrit: "kāraṇḍavāsana" },
        { devanagari: "मयूरासन", sanskrit: "mayūrāsana" },
        { devanagari: "नक्रासन", sanskrit: "nakrāsana" },
        { devanagari: "वातायनासन", sanskrit: "vātāyanāsana" },
        { devanagari: "परिघासन", sanskrit: "parighāsana" },
        { devanagari: "गोमुखासन", sanskrit: "gomukhāsana" },
        { devanagari: "सुप्त ऊर्ध्व पाद वज्रासन", sanskrit: "supta ūrdhva pāda vajrāsana" },
        { devanagari: "मुक्त हस्त शीर्षासन", sanskrit: "mukta hasta śīrṣāsana" },
        { devanagari: "बद्ध हस्त शीर्षासन", sanskrit: "baddha hasta śīrṣāsana" },
        { devanagari: "ऊर्ध्व धनुरासन", sanskrit: "ūrdhva dhanurāsana" },
        { devanagari: "विपरीत चक्रासन", sanskrit: "viparīta cakrāsana" },
        { devanagari: "त्रियङ्गमुख उत्तानासन", sanskrit: "triyaṅgamukha uttānāsana" },
        { devanagari: "सालम्ब सर्वाङ्गासन", sanskrit: "sālamba sarvāṅgāsana" },
        { devanagari: "हलासन", sanskrit: "halāsana" },
        { devanagari: "कर्ण पीडासन", sanskrit: "karṇa pīḍāsana" },
        { devanagari: "ऊर्ध्व पद्मासन", sanskrit: "ūrdhva padmāsana" },
        { devanagari: "पिण्डासन", sanskrit: "piṇḍāsana" },
        { devanagari: "मत्स्यासन", sanskrit: "matsyāsana" },
        { devanagari: "उत्तान पादासन", sanskrit: "uttāna pādāsana" },
        { devanagari: "शीर्षासन", sanskrit: "śīrṣāsana" },
        { devanagari: "बद्ध पद्मासन", sanskrit: "baddha padmāsana" },
        { devanagari: "योग-मुद्रा", sanskrit: "yoga-mudrā" },
        { devanagari: "पद्मासन", sanskrit: "padmāsana" },
        { devanagari: "उत्प्लुतिः", sanskrit: "utplutiḥ" },
        { devanagari: "सुखासन", sanskrit: "sukhāsana" }
      ],
      meanings: [
        {
          devanagari: "समस्थितिः",
          sanskrit: "samasthitiḥ",
          meaning: "Equal Standing",
          breakdown: {
            devanagari: "सम + स्थितिः",
            sanskrit: "sama + sthitiḥ",
            meaning: "equal + steadiness"
          }
        },
        {
          devanagari: "सूर्य नमस्कार",
          sanskrit: "sūrya namaskāra",
          meaning: "Sun Salutation",
          breakdown: {
            devanagari: "सूर्य + नमस्कार",
            sanskrit: "sūrya + namaskāra",
            meaning: "sun + salutation"
          }
        },
        {
          devanagari: "पादाङ्गुष्ठासन",
          sanskrit: "pādāṅguṣṭhāsana",
          meaning: "Hand to Big Toe Pose",
          breakdown: {
            devanagari: "पाद + अङ्गुष्ठ + आसन",
            sanskrit: "pāda + aṅguṣṭha + āsana",
            meaning: "foot + big toe + posture"
          }
        },
        {
          devanagari: "पादहस्तासन",
          sanskrit: "pāda hastāsana",
          meaning: "Hand to Foot Pose",
          breakdown: {
            devanagari: "पाद + हस्त + आसन",
            sanskrit: "pāda + hasta + āsana",
            meaning: "foot + hand + posture"
          }
        },
        {
          devanagari: "उत्थित त्रिकोणासन",
          sanskrit: "utthita trikoṇāsana",
          meaning: "Extended Triangle Pose",
          breakdown: {
            devanagari: "उत्थित + त्रिकोण + आसन",
            sanskrit: "utthita + trikoṇa + āsana",
            meaning: "extended + triangle + posture"
          }
        },
        {
          devanagari: "उत्थित पार्श्वकोणासन",
          sanskrit: "utthita pārśvakoṇāsana",
          meaning: "Extended Side Angle Pose",
          breakdown: {
            devanagari: "उत्थित + पार्श्व + कोण + आसन",
            sanskrit: "utthita + pārśva + koṇa + āsana",
            meaning: "extended + side + angle + posture"
          }
        },
        {
          devanagari: "प्रसारित पादोत्तानासन",
          sanskrit: "prasārita pādottānāsana",
          meaning: "Wide-Legged Forward Bend Pose",
          breakdown: {
            devanagari: "प्रसारित + पाद + उत्तान + आसन",
            sanskrit: "prasārita + pāda + uttāna + āsana",
            meaning: "spread out + foot + intense stretch + posture"
          }
        },
        {
          devanagari: "पार्श्वोत्तानासन",
          sanskrit: "pārśvottānāsana",
          meaning: "Intense Side Stretch Pose",
          breakdown: {
            devanagari: "पार्श्व + उत्तान + आसन",
            sanskrit: "pārśva + uttāna + āsana",
            meaning: "side + intense stretch + posture"
          }
        },
        {
          devanagari: "उत्थितहस्त पादाङ्गुष्ठासन",
          sanskrit: "utthita hasta pādāṅguṣṭhāsana",
          meaning: "Extended Hand to Big Toe Pose",
          breakdown: {
            devanagari: "उत्थित + हस्त + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "utthita + hasta + pāda + aṅguṣṭha + āsana",
            meaning: "extended + hand + foot + toe + posture"
          }
        },
        {
          devanagari: "अर्धबद्ध पद्मोत्तानासन",
          sanskrit: "ardha baddha padmottānāsana",
          meaning: "Half Bound Lotus Forward Bend Pose",
          breakdown: {
            devanagari: "अर्ध + बद्ध + पद्म + उत्तान + आसन",
            sanskrit: "ardha + baddha + padma + uttāna + āsana",
            meaning: "half + bound + lotus + intense stretch + posture"
          }
        },
        {
          devanagari: "उत्कटासन",
          sanskrit: "utkaṭāsana",
          meaning: "Fierce Pose",
          breakdown: {
            devanagari: "उत्कट + आसन",
            sanskrit: "utkaṭa + āsana",
            meaning: "powerful + posture"
          }
        },
        {
          devanagari: "वीरभद्रासन",
          sanskrit: "vīrabhadrāsana",
          meaning: "Warrior Pose",
          breakdown: {
            devanagari: "वीरभद्र + आसन",
            sanskrit: "vīrabhadra + āsana",
            meaning: "warrior + posture"
          }
        },
        {
          devanagari: "दण्डासन",
          sanskrit: "daṇḍāsana",
          meaning: "Staff Pose",
          breakdown: {
            devanagari: "दण्ड + आसन",
            sanskrit: "daṇḍa + āsana",
            meaning: "staff + posture"
          }
        },
        {
          devanagari: "पश्चिमोत्तानासन",
          sanskrit: "paścimottānāsana",
          meaning: "Seated Forward Bend Pose",
          breakdown: {
            devanagari: "पश्चिम + उत्तान + आसन",
            sanskrit: "paścima + uttāna + āsana",
            meaning: "west + intense stretch + posture"
          }
        },
        {
          devanagari: "पूर्वोत्तानासन",
          sanskrit: "pūrvottānāsana",
          meaning: "Upward Plank Pose",
          breakdown: {
            devanagari: "पूर्व + उत्तान + आसन",
            sanskrit: "pūrva + uttāna + āsana",
            meaning: "east + intense stretch + posture"
          }
        },
        {
          devanagari: "अर्धबद्धपद्म पश्चिमोत्तानासन",
          sanskrit: "ardha baddha padma paścimottānāsana",
          meaning: "Half Bound Lotus Forward Bend Pose",
          breakdown: {
            devanagari: "अर्ध + बद्ध + पद्म + पश्चिम + उत्तान + आसन",
            sanskrit: "ardha + baddha + padma + paścima + uttāna + āsana",
            meaning: "half + bound + lotus + west + intense stretch + posture"
          }
        },
        {
          devanagari: "त्रियङ्गमुखैकपाद पश्चिमोत्तानासन",
          sanskrit: "triyaṅga mukhaikapāda paścimottānāsana",
          meaning: "Three Limbed Face to One Foot Forward Bend Pose",
          breakdown: {
            devanagari: "त्रि + अङ्ग + मुख + एक + पाद + पश्चिम + उत्तान + आसन",
            sanskrit: "tri + aṅga + mukha + eka + pāda + paścima + uttāna + āsana",
            meaning: "three + limb + face + one + foot + west + intense stretch + posture"
          }
        },
        {
          devanagari: "जानुशीर्षासन",
          sanskrit: "jānu śīrṣāsana",
          meaning: "Head to Knee Pose",
          breakdown: {
            devanagari: "जानु + शीर्ष + आसन",
            sanskrit: "jānu + śīrṣa + āsana",
            meaning: "knee + head + posture"
          }
        },
        {
          devanagari: "मरीच्यासन",
          sanskrit: "marīcyāsana",
          meaning: "Marichi's Pose",
          breakdown: {
            devanagari: "मरीचि + आसन",
            sanskrit: "marīci + āsana",
            meaning: "Marichi + posture"
          }
        },
        {
          devanagari: "नावासन",
          sanskrit: "nāvāsana",
          meaning: "Boat Pose",
          breakdown: {
            devanagari: "नाव + आसन",
            sanskrit: "nāva + āsana",
            meaning: "boat + posture"
          }
        },
        {
          devanagari: "भुजपीडासन",
          sanskrit: "bhuja pīḍāsana",
          meaning: "Arm Pressure Pose",
          breakdown: {
            devanagari: "भुज + पीड + आसन",
            sanskrit: "bhuja + pīḍa + āsana",
            meaning: "arm + pressure + posture"
          }
        },
        {
          devanagari: "कूर्मासन",
          sanskrit: "kūrmāsana",
          meaning: "Tortoise Pose",
          breakdown: {
            devanagari: "कूर्म + आसन",
            sanskrit: "kūrma + āsana",
            meaning: "tortoise + posture"
          }
        },
        {
          devanagari: "सुप्त कूर्मासन",
          sanskrit: "supta kūrmāsana",
          meaning: "Sleeping Tortoise Pose",
          breakdown: {
            devanagari: "सुप्त + कूर्म + आसन",
            sanskrit: "supta + kūrma + āsana",
            meaning: "reclining + tortoise + posture"
          }
        },
        {
          devanagari: "गर्भ पिण्डासन",
          sanskrit: "garbha piṇḍāsana",
          meaning: "Embryo in the Womb Pose",
          breakdown: {
            devanagari: "गर्भ + पिण्ड + आसन",
            sanskrit: "garbha + piṇḍa + āsana",
            meaning: "womb + embryo + posture"
          }
        },
        {
          devanagari: "कुक्कुटासन",
          sanskrit: "kukkuṭāsana",
          meaning: "Cockerel Pose",
          breakdown: {
            devanagari: "कुक्कुट + आसन",
            sanskrit: "kukkuṭa + āsana",
            meaning: "rooster + posture"
          }
        },
        {
          devanagari: "बद्ध कोणासन",
          sanskrit: "baddha koṇāsana",
          meaning: "Bound Angle Pose",
          breakdown: {
            devanagari: "बद्ध + कोण + आसन",
            sanskrit: "baddha + koṇa + āsana",
            meaning: "bound + angle + posture"
          }
        },
        {
          devanagari: "उपविष्ट कोणासन",
          sanskrit: "upaviṣṭa koṇāsana",
          meaning: "Seated Angle Pose",
          breakdown: {
            devanagari: "उपविष्ट + कोण + आसन",
            sanskrit: "upaviṣṭa + koṇa + āsana",
            meaning: "seated + angle + posture"
          }
        },
        {
          devanagari: "सुप्त कोणासन",
          sanskrit: "supta koṇāsana",
          meaning: "Reclining Angle Pose",
          breakdown: {
            devanagari: "सुप्त + कोण + आसन",
            sanskrit: "supta + koṇa + āsana",
            meaning: "reclining + angle + posture"
          }
        },
        {
          devanagari: "सुप्त पादाङ्गुष्ठासन",
          sanskrit: "supta pādāṅguṣṭhāsana",
          meaning: "Reclining Hand to Big Toe Pose",
          breakdown: {
            devanagari: "सुप्त + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "supta + pāda + aṅguṣṭha + āsana",
            meaning: "reclining + foot + toe + posture"
          }
        },
        {
          devanagari: "उभय पादाङ्गुष्ठासन",
          sanskrit: "ubhaya pādāṅguṣṭhāsana",
          meaning: "Both Big Toe Pose",
          breakdown: {
            devanagari: "उभय + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "ubhaya + pāda + aṅguṣṭha + āsana",
            meaning: "both + foot + toe + posture"
          }
        },
        {
          devanagari: "ऊर्ध्वमुख पश्चिमोत्तानासन",
          sanskrit: "ūrdhva mukha paścimottānāsana",
          meaning: "Upward Facing West Stretch Pose",
          breakdown: {
            devanagari: "ऊर्ध्व + मुख + पश्चिम + उत्तान + आसन",
            sanskrit: "ūrdhva + mukha + paścima + uttāna + āsana",
            meaning: "upward + face + west + intense stretch + posture"
          }
        },
        {
          devanagari: "सेतुबन्धासन",
          sanskrit: "setu bandhāsana",
          meaning: "Bridge Pose",
          breakdown: {
            devanagari: "सेतु + बन्ध + आसन",
            sanskrit: "setu + bandha + āsana",
            meaning: "bridge + bind + posture"
          }
        },
        {
          devanagari: "पाशासन",
          sanskrit: "pāśāsana",
          meaning: "Noose Pose",
          breakdown: {
            devanagari: "पाश + आसन",
            sanskrit: "pāśa + āsana",
            meaning: "noose + posture"
          }
        },
        {
          devanagari: "क्रौञ्चासन",
          sanskrit: "krauñcāsana",
          meaning: "Heron Pose",
          breakdown: {
            devanagari: "क्रौञ्च + आसन",
            sanskrit: "krauñca + āsana",
            meaning: "heron + posture"
          }
        },
        {
          devanagari: "शलभासन",
          sanskrit: "śalabhāsana",
          meaning: "Locust Pose",
          breakdown: {
            devanagari: "शलभ + आसन",
            sanskrit: "śalabha + āsana",
            meaning: "locust + posture"
          }
        },
        {
          devanagari: "भेकासन",
          sanskrit: "bhekāsana",
          meaning: "Frog Pose",
          breakdown: {
            devanagari: "भेक + आसन",
            sanskrit: "bheka + āsana",
            meaning: "frog + posture"
          }
        },
        {
          devanagari: "धनुरासन",
          sanskrit: "dhanurāsana",
          meaning: "Bow Pose",
          breakdown: {
            devanagari: "धनुर + आसन",
            sanskrit: "dhanura + āsana",
            meaning: "bow + posture"
          }
        },
        {
          devanagari: "पार्श्व धनुरासन",
          sanskrit: "pārśva dhanurāsana",
          meaning: "Side Bow Pose",
          breakdown: {
            devanagari: "पार्श्व + धनुर + आसन",
            sanskrit: "pārśva + dhanura + āsana",
            meaning: "side + bow + posture"
          }
        },
        {
          devanagari: "उष्ट्रासन",
          sanskrit: "uṣṭrāsana",
          meaning: "Camel Pose",
          breakdown: {
            devanagari: "उष्ट्र + आसन",
            sanskrit: "uṣṭra + āsana",
            meaning: "camel + posture"
          }
        },
        {
          devanagari: "लघु वज्रासन",
          sanskrit: "laghu vajrāsana",
          meaning: "Little Thunderbolt Pose",
          breakdown: {
            devanagari: "लघु + वज्र + आसन",
            sanskrit: "laghu + vajra + āsana",
            meaning: "light + thunderbolt + posture"
          }
        },
        {
          devanagari: "कपोतासन",
          sanskrit: "kapotāsana",
          meaning: "Pigeon Pose",
          breakdown: {
            devanagari: "कपोत + आसन",
            sanskrit: "kapota + āsana",
            meaning: "pigeon + posture"
          }
        },
        {
          devanagari: "सुप्त वज्रासन",
          sanskrit: "supta vajrāsana",
          meaning: "Reclining Thunderbolt Pose",
          breakdown: {
            devanagari: "सुप्त + वज्र + आसन",
            sanskrit: "supta + vajra + āsana",
            meaning: "reclining + thunderbolt + posture"
          }
        },
        {
          devanagari: "बकासन",
          sanskrit: "bakāsana",
          meaning: "Crane Pose",
          breakdown: {
            devanagari: "बक + आसन",
            sanskrit: "baka + āsana",
            meaning: "crane + posture"
          }
        },
        {
          devanagari: "भरद्वाजासन",
          sanskrit: "bharadvājāsana",
          meaning: "Bharadvaja's Pose",
          breakdown: {
            devanagari: "भरद्वाज + आसन",
            sanskrit: "bharadvāja + āsana",
            meaning: "Bharadvaja + posture"
          }
        },
        {
          devanagari: "अर्ध मत्स्येन्द्रासन",
          sanskrit: "ardha matsyendrāsana",
          meaning: "Half Lord of the Fishes Pose",
          breakdown: {
            devanagari: "अर्ध + मत्स्येन्द्र + आसन",
            sanskrit: "ardha + matsyendra + āsana",
            meaning: "half + Matsyendra + posture"
          }
        },
        {
          devanagari: "एक पाद शीर्षासन",
          sanskrit: "eka pāda śīrṣāsana",
          meaning: "One Leg Behind Head Pose",
          breakdown: {
            devanagari: "एक + पाद + शीर्ष + आसन",
            sanskrit: "eka + pāda + śīrṣa + āsana",
            meaning: "one + foot + head + posture"
          }
        },
        {
          devanagari: "द्वि पाद शीर्षासन",
          sanskrit: "dvi pāda śīrṣāsana",
          meaning: "Both Legs Behind Head Pose",
          breakdown: {
            devanagari: "द्वि + पाद + शीर्ष + आसन",
            sanskrit: "dvi + pāda + śīrṣa + āsana",
            meaning: "two + foot + head + posture"
          }
        },
        {
          devanagari: "योग निद्रासन",
          sanskrit: "yoga nidrāsana",
          meaning: "Yogic Sleep Pose",
          breakdown: {
            devanagari: "योग + निद्रा + आसन",
            sanskrit: "yoga + nidrā + āsana",
            meaning: "yoga + sleep + posture"
          }
        },
        {
          devanagari: "टिट्टिभासन",
          sanskrit: "ṭiṭṭibhāsana",
          meaning: "Firefly Pose",
          breakdown: {
            devanagari: "टिट्टिभ + आसन",
            sanskrit: "ṭiṭṭibha + āsana",
            meaning: "firefly + posture"
          }
        },
        {
          devanagari: "पिञ्छ मयूरासन",
          sanskrit: "piñcha mayūrāsana",
          meaning: "Feathered Peacock Pose",
          breakdown: {
            devanagari: "पिञ्छ + मयूर + आसन",
            sanskrit: "piñcha + mayūra + āsana",
            meaning: "feather + peacock + posture"
          }
        },
        {
          devanagari: "कारण्डवासन",
          sanskrit: "kāraṇḍavāsana",
          meaning: "Coot Pose",
          breakdown: {
            devanagari: "कारण्डव + आसन",
            sanskrit: "kāraṇḍava + āsana",
            meaning: "coot + posture"
          }
        },
        {
          devanagari: "मयूरासन",
          sanskrit: "mayūrāsana",
          meaning: "Peacock Pose",
          breakdown: {
            devanagari: "मयूर + आसन",
            sanskrit: "mayūra + āsana",
            meaning: "peacock + posture"
          }
        },
        {
          devanagari: "नक्रासन",
          sanskrit: "nakrāsana",
          meaning: "Crocodile Pose",
          breakdown: {
            devanagari: "नक्र + आसन",
            sanskrit: "nakra + āsana",
            meaning: "crocodile + posture"
          }
        },
        {
          devanagari: "वातायनासन",
          sanskrit: "vātāyanāsana",
          meaning: "Horse Pose",
          breakdown: {
            devanagari: "वातायन + आसन",
            sanskrit: "vātāyana + āsana",
            meaning: "horse + posture"
          }
        },
        {
          devanagari: "परिघासन",
          sanskrit: "parighāsana",
          meaning: "Gate Pose",
          breakdown: {
            devanagari: "परिघ + आसन",
            sanskrit: "parigha + āsana",
            meaning: "gate bar + posture"
          }
        },
        {
          devanagari: "गोमुखासन",
          sanskrit: "gomukhāsana",
          meaning: "Cow Face Pose",
          breakdown: {
            devanagari: "गो + मुख + आसन",
            sanskrit: "go + mukha + āsana",
            meaning: "cow + face + posture"
          }
        },
        {
          devanagari: "सुप्त ऊर्ध्व पाद वज्रासन",
          sanskrit: "supta ūrdhva pāda vajrāsana",
          meaning: "Reclining Upward Leg Thunderbolt Pose",
          breakdown: {
            devanagari: "सुप्त + ऊर्ध्व + पाद + वज्र + आसन",
            sanskrit: "supta + ūrdhva + pāda + vajra + āsana",
            meaning: "reclining + upward + foot + thunderbolt + posture"
          }
        },
        {
          devanagari: "मुक्त हस्त शीर्षासन",
          sanskrit: "mukta hasta śīrṣāsana",
          meaning: "Free Hands Headstand Pose",
          breakdown: {
            devanagari: "मुक्त + हस्त + शीर्ष + आसन",
            sanskrit: "mukta + hasta + śīrṣa + āsana",
            meaning: "free + hand + head + posture"
          }
        },
        {
          devanagari: "बद्ध हस्त शीर्षासन",
          sanskrit: "baddha hasta śīrṣāsana",
          meaning: "Bound Hands Headstand Pose",
          breakdown: {
            devanagari: "बद्ध + हस्त + शीर्ष + आसन",
            sanskrit: "baddha + hasta + śīrṣa + āsana",
            meaning: "bound + hand + head + posture"
          }
        },
        {
          devanagari: "ऊर्ध्व धनुरासन",
          sanskrit: "ūrdhva dhanurāsana",
          meaning: "Upward Bow Pose",
          breakdown: {
            devanagari: "ऊर्ध्व + धनुर + आसन",
            sanskrit: "ūrdhva + dhanura + āsana",
            meaning: "upward + bow + posture"
          }
        },
        {
          devanagari: "विपरीत चक्रासन",
          sanskrit: "viparīta cakrāsana",
          meaning: "Reverse Wheel Pose",
          breakdown: {
            devanagari: "विपरीत + चक्र + आसन",
            sanskrit: "viparīta + cakra + āsana",
            meaning: "reverse + wheel + posture"
          }
        },
        {
          devanagari: "त्रियङ्गमुख उत्तानासन",
          sanskrit: "triyaṅgamukha uttānāsana",
          meaning: "Three Limbed Face Extended Pose",
          breakdown: {
            devanagari: "त्रियङ्ग + मुख + उत्तान + आसन",
            sanskrit: "triyaṅga + mukha + uttāna + āsana",
            meaning: "three limbs + face + extended + posture"
          }
        },
        {
          devanagari: "सालम्ब सर्वाङ्गासन",
          sanskrit: "sālamba sarvāṅgāsana",
          meaning: "Supported Shoulderstand Pose",
          breakdown: {
            devanagari: "स + आलम्ब + सर्व + अङ्ग + आसन",
            sanskrit: "sa + ālamba + sarva + aṅga + āsana",
            meaning: "with + support + all + limbs + posture"
          }
        },
        {
          devanagari: "हलासन",
          sanskrit: "halāsana",
          meaning: "Plow Pose",
          breakdown: {
            devanagari: "हल + आसन",
            sanskrit: "hala + āsana",
            meaning: "plow + posture"
          }
        },
        {
          devanagari: "कर्ण पीडासन",
          sanskrit: "karṇa pīḍāsana",
          meaning: "Ear Pressure Pose",
          breakdown: {
            devanagari: "कर्ण + पीड + आसन",
            sanskrit: "karṇa + pīḍa + āsana",
            meaning: "ear + pressure + posture"
          }
        },
        {
          devanagari: "ऊर्ध्व पद्मासन",
          sanskrit: "ūrdhva padmāsana",
          meaning: "Upward Lotus Pose",
          breakdown: {
            devanagari: "ऊर्ध्व + पद्म + आसन",
            sanskrit: "ūrdhva + padma + āsana",
            meaning: "upward + lotus + posture"
          }
        },
        {
          devanagari: "पिण्डासन",
          sanskrit: "piṇḍāsana",
          meaning: "Embryo Pose",
          breakdown: {
            devanagari: "पिण्ड + आसन",
            sanskrit: "piṇḍa + āsana",
            meaning: "embryo + posture"
          }
        },
        {
          devanagari: "मत्स्यासन",
          sanskrit: "matsyāsana",
          meaning: "Fish Pose",
          breakdown: {
            devanagari: "मत्स्य + आसन",
            sanskrit: "matsya + āsana",
            meaning: "fish + posture"
          }
        },
        {
          devanagari: "उत्तान पादासन",
          sanskrit: "uttāna pādāsana",
          meaning: "Extended Leg Pose",
          breakdown: {
            devanagari: "उत्तान + पाद + आसन",
            sanskrit: "uttāna + pāda + āsana",
            meaning: "extended + foot + posture"
          }
        },
        {
          devanagari: "शीर्षासन",
          sanskrit: "śīrṣāsana",
          meaning: "Headstand Pose",
          breakdown: {
            devanagari: "शीर्ष + आसन",
            sanskrit: "śīrṣa + āsana",
            meaning: "head + posture"
          }
        },
        {
          devanagari: "बद्ध पद्मासन",
          sanskrit: "baddha padmāsana",
          meaning: "Bound Lotus Pose",
          breakdown: {
            devanagari: "बद्ध + पद्म + आसन",
            sanskrit: "baddha + padma + āsana",
            meaning: "bound + lotus + posture"
          }
        },
        {
          devanagari: "योग-मुद्रा",
          sanskrit: "yoga-mudrā",
          meaning: "Yoga Seal",
          breakdown: {
            devanagari: "योग + मुद्रा",
            sanskrit: "yoga + mudrā",
            meaning: "yoga + seal"
          }
        },
        {
          devanagari: "पद्मासन",
          sanskrit: "padmāsana",
          meaning: "Lotus Pose",
          breakdown: {
            devanagari: "पद्म + आसन",
            sanskrit: "padma + āsana",
            meaning: "lotus + posture"
          }
        },
        {
          devanagari: "उत्प्लुतिः",
          sanskrit: "utplutiḥ",
          meaning: "Lifting Up",
          breakdown: {
            devanagari: "उत्प्लुति",
            sanskrit: "utpluti",
            meaning: "lifting up"
          }
        },
        {
          devanagari: "सुखासन",
          sanskrit: "sukhāsana",
          meaning: "Easy Pose",
          breakdown: {
            devanagari: "सुख + आसन",
            sanskrit: "sukha + āsana",
            meaning: "comfortable + posture"
          }
        }
      ]
    },
    zh: {
      title: "体式",
      subtitle: "阿斯汤加瑜伽体式",
      intro: "部分体式序列参考，包含梵文名称、翻译和释义。通过系统性的序列练习培养身体力量与柔韧性，在呼吸与动作的融合中引导身心平衡发展，实现和谐统一。",
      sections: {
        list: {
          title: "体式列表",
          content: "阿斯汤加瑜伽部分体式练习序列"
        },
        meanings: {
          title: "体式释义",
          content: "梵文名称的翻译与词源含义解析"
        }
      },
      asanas: [
        { devanagari: "समस्थितिः", sanskrit: "samasthitiḥ" },
        { devanagari: "सूर्य नमस्कार", sanskrit: "sūrya namaskāra" },
        { devanagari: "पादाङ्गुष्ठासन", sanskrit: "pādāṅguṣṭhāsana" },
        { devanagari: "पादहस्तासन", sanskrit: "pāda hastāsana" },
        { devanagari: "उत्थित त्रिकोणासन", sanskrit: "utthita trikoṇāsana" },
        { devanagari: "उत्थित पार्श्वकोणासन", sanskrit: "utthita pārśvakoṇāsana" },
        { devanagari: "प्रसारित पादोत्तानासन", sanskrit: "prasārita pādottānāsana" },
        { devanagari: "पार्श्वोत्तानासन", sanskrit: "pārśvottānāsana" },
        { devanagari: "उत्थितहस्त पादाङ्गुष्ठासन", sanskrit: "utthita hasta pādāṅguṣṭhāsana" },
        { devanagari: "अर्धबद्ध पद्मोत्तानासन", sanskrit: "ardha baddha padmottānāsana" },
        { devanagari: "उत्कटासन", sanskrit: "utkaṭāsana" },
        { devanagari: "वीरभद्रासन", sanskrit: "vīrabhadrāsana" },
        { devanagari: "दण्डासन", sanskrit: "daṇḍāsana" },
        { devanagari: "पश्चिमोत्तानासन", sanskrit: "paścimottānāsana" },
        { devanagari: "पूर्वोत्तानासन", sanskrit: "pūrvottānāsana" },
        { devanagari: "अर्धबद्धपद्म पश्चिमोत्तानासन", sanskrit: "ardha baddha padma paścimottānāsana" },
        { devanagari: "त्रियङ्गमुखैकपाद पश्चिमोत्तानासन", sanskrit: "triyaṅga mukhaikapāda paścimottānāsana" },
        { devanagari: "जानुशीर्षासन", sanskrit: "jānu śīrṣāsana" },
        { devanagari: "मरीच्यासन", sanskrit: "marīcyāsana" },
        { devanagari: "नावासन", sanskrit: "nāvāsana" },
        { devanagari: "भुजपीडासन", sanskrit: "bhuja pīḍāsana" },
        { devanagari: "कूर्मासन", sanskrit: "kūrmāsana" },
        { devanagari: "सुप्त कूर्मासन", sanskrit: "supta kūrmāsana" },
        { devanagari: "गर्भ पिण्डासन", sanskrit: "garbha piṇḍāsana" },
        { devanagari: "कुक्कुटासन", sanskrit: "kukkuṭāsana" },
        { devanagari: "बद्ध कोणासन", sanskrit: "baddha koṇāsana" },
        { devanagari: "उपविष्ट कोणासन", sanskrit: "upaviṣṭa koṇāsana" },
        { devanagari: "सुप्त कोणासन", sanskrit: "supta koṇāsana" },
        { devanagari: "सुप्त पादाङ्गुष्ठासन", sanskrit: "supta pādāṅguṣṭhāsana" },
        { devanagari: "उभय पादाङ्गुष्ठासन", sanskrit: "ubhaya pādāṅguṣṭhāsana" },
        { devanagari: "ऊर्ध्वमुख पश्चिमोत्तानासन", sanskrit: "ūrdhva mukha paścimottānāsana" },
        { devanagari: "सेतुबन्धासन", sanskrit: "setu bandhāsana" },
        { devanagari: "पाशासन", sanskrit: "pāśāsana" },
        { devanagari: "क्रौञ्चासन", sanskrit: "krauñcāsana" },
        { devanagari: "शलभासन", sanskrit: "śalabhāsana" },
        { devanagari: "भेकासन", sanskrit: "bhekāsana" },
        { devanagari: "धनुरासन", sanskrit: "dhanurāsana" },
        { devanagari: "पार्श्व धनुरासन", sanskrit: "pārśva dhanurāsana" },
        { devanagari: "उष्ट्रासन", sanskrit: "uṣṭrāsana" },
        { devanagari: "लघु वज्रासन", sanskrit: "laghu vajrāsana" },
        { devanagari: "कपोतासन", sanskrit: "kapotāsana" },
        { devanagari: "सुप्त वज्रासन", sanskrit: "supta vajrāsana" },
        { devanagari: "बकासन", sanskrit: "bakāsana" },
        { devanagari: "भरद्वाजासन", sanskrit: "bharadvājāsana" },
        { devanagari: "अर्ध मत्स्येन्द्रासन", sanskrit: "ardha matsyendrāsana" },
        { devanagari: "एक पाद शीर्षासन", sanskrit: "eka pāda śīrṣāsana" },
        { devanagari: "द्वि पाद शीर्षासन", sanskrit: "dvi pāda śīrṣāsana" },
        { devanagari: "योग निद्रासन", sanskrit: "yoga nidrāsana" },
        { devanagari: "टिट्टिभासन", sanskrit: "ṭiṭṭibhāsana" },
        { devanagari: "पिञ्छ मयूरासन", sanskrit: "piñcha mayūrāsana" },
        { devanagari: "कारण्डवासन", sanskrit: "kāraṇḍavāsana" },
        { devanagari: "मयूरासन", sanskrit: "mayūrāsana" },
        { devanagari: "नक्रासन", sanskrit: "nakrāsana" },
        { devanagari: "वातायनासन", sanskrit: "vātāyanāsana" },
        { devanagari: "परिघासन", sanskrit: "parighāsana" },
        { devanagari: "गोमुखासन", sanskrit: "gomukhāsana" },
        { devanagari: "सुप्त ऊर्ध्व पाद वज्रासन", sanskrit: "supta ūrdhva pāda vajrāsana" },
        { devanagari: "मुक्त हस्त शीर्षासन", sanskrit: "mukta hasta śīrṣāsana" },
        { devanagari: "बद्ध हस्त शीर्षासन", sanskrit: "baddha hasta śīrṣāsana" },
        { devanagari: "ऊर्ध्व धनुरासन", sanskrit: "ūrdhva dhanurāsana" },
        { devanagari: "विपरीत चक्रासन", sanskrit: "viparīta cakrāsana" },
        { devanagari: "त्रियङ्गमुख उत्तानासन", sanskrit: "triyaṅgamukha uttānāsana" },
        { devanagari: "सालम्ब सर्वाङ्गासन", sanskrit: "sālamba sarvāṅgāsana" },
        { devanagari: "हलासन", sanskrit: "halāsana" },
        { devanagari: "कर्ण पीडासन", sanskrit: "karṇa pīḍāsana" },
        { devanagari: "ऊर्ध्व पद्मासन", sanskrit: "ūrdhva padmāsana" },
        { devanagari: "पिण्डासन", sanskrit: "piṇḍāsana" },
        { devanagari: "मत्स्यासन", sanskrit: "matsyāsana" },
        { devanagari: "उत्तान पादासन", sanskrit: "uttāna pādāsana" },
        { devanagari: "शीर्षासन", sanskrit: "śīrṣāsana" },
        { devanagari: "बद्ध पद्मासन", sanskrit: "baddha padmāsana" },
        { devanagari: "योग-मुद्रा", sanskrit: "yoga-mudrā" },
        { devanagari: "पद्मासन", sanskrit: "padmāsana" },
        { devanagari: "उत्प्लुतिः", sanskrit: "utplutiḥ" },
        { devanagari: "सुखासन", sanskrit: "sukhāsana" }
      ],
      meanings: [
        {
          devanagari: "समस्थितिः",
          sanskrit: "samasthitiḥ",
          meaning: "立正",
          breakdown: {
            devanagari: "सम + स्थितिः",
            sanskrit: "sama + sthitiḥ",
            meaning: "相等的 + 稳定"
          }
        },
        {
          devanagari: "सूर्य नमस्कार",
          sanskrit: "sūrya namaskāra",
          meaning: "拜日",
          breakdown: {
            devanagari: "सूर्य + नमस्कार",
            sanskrit: "sūrya + namaskāra",
            meaning: "太阳 + 礼拜"
          }
        },
        {
          devanagari: "पादाङ्गुष्ठासन",
          sanskrit: "pādāṅguṣṭhāsana",
          meaning: "手抓脚趾式",
          breakdown: {
            devanagari: "पाद + अङ्गुष्ठ + आसन",
            sanskrit: "pāda + aṅguṣṭha + āsana",
            meaning: "脚 + 脚趾 + 体式"
          }
        },
        {
          devanagari: "पादहस्तासन",
          sanskrit: "pāda hastāsana",
          meaning: "手掌触脚式",
          breakdown: {
            devanagari: "पाद + हस्त + आसन",
            sanskrit: "pāda + hasta + āsana",
            meaning: "脚 + 手 + 体式"
          }
        },
        {
          devanagari: "उत्थित त्रिकोणासन",
          sanskrit: "utthita trikoṇāsana",
          meaning: "三角伸展式",
          breakdown: {
            devanagari: "उत्थित + त्रिकोण + आसन",
            sanskrit: "utthita + trikoṇa + āsana",
            meaning: "伸展的 + 三角 + 体式"
          }
        },
        {
          devanagari: "उत्थित पार्श्वकोणासन",
          sanskrit: "utthita pārśvakoṇāsana",
          meaning: "侧角伸展式",
          breakdown: {
            devanagari: "उत्थित + पार्श्व + कोण + आसन",
            sanskrit: "utthita + pārśva + koṇa + āsana",
            meaning: "伸展的 + 侧面 + 角 + 体式"
          }
        },
        {
          devanagari: "प्रसारित पादोत्तानासन",
          sanskrit: "prasārita pādottānāsana",
          meaning: "分腿伸展式",
          breakdown: {
            devanagari: "प्रसारित + पाद + उत्तान + आसन",
            sanskrit: "prasārita + pāda + uttāna + āsana",
            meaning: "展开的 + 脚 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "पार्श्वोत्तानासन",
          sanskrit: "pārśvottānāsana",
          meaning: "侧伸展式",
          breakdown: {
            devanagari: "पार्श्व + उत्तान + आसन",
            sanskrit: "pārśva + uttāna + āsana",
            meaning: "侧面 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "उत्थितहस्त पादाङ्गुष्ठासन",
          sanskrit: "utthita hasta pādāṅguṣṭhāsana",
          meaning: "手抓脚趾伸展式",
          breakdown: {
            devanagari: "उत्थित + हस्त + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "utthita + hasta + pāda + aṅguṣṭha + āsana",
            meaning: "伸展的 + 手 + 脚 + 脚趾 + 体式"
          }
        },
        {
          devanagari: "अर्धबद्ध पद्मोत्तानासन",
          sanskrit: "ardha baddha padmottānāsana",
          meaning: "半莲花捆绑伸展式",
          breakdown: {
            devanagari: "अर्ध + बद्ध + पद्म + उत्तान + आसन",
            sanskrit: "ardha + baddha + padma + uttāna + āsana",
            meaning: "一半 + 束缚的 + 莲花 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "उत्कटासन",
          sanskrit: "utkaṭāsana",
          meaning: "猛烈式",
          breakdown: {
            devanagari: "उत्कट + आसन",
            sanskrit: "utkaṭa + āsana",
            meaning: "强大的 + 体式"
          }
        },
        {
          devanagari: "वीरभद्रासन",
          sanskrit: "vīrabhadrāsana",
          meaning: "战士式",
          breakdown: {
            devanagari: "वीरभद्र + आसन",
            sanskrit: "vīrabhadra + āsana",
            meaning: "维拉巴德拉 + 体式"
          }
        },
        {
          devanagari: "दण्डासन",
          sanskrit: "daṇ्डāsana",
          meaning: "杖式",
          breakdown: {
            devanagari: "दण्ड + आसन",
            sanskrit: "daṇḍa + āsana",
            meaning: "杖 + 体式"
          }
        },
        {
          devanagari: "पश्चिमोत्तानासन",
          sanskrit: "paścimottānāsana",
          meaning: "背部伸展式",
          breakdown: {
            devanagari: "पश्चिम + उत्तान + आसन",
            sanskrit: "paścima + uttāna + āsana",
            meaning: "西方 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "पूर्वोत्तानासन",
          sanskrit: "pūrvottānāsana",
          meaning: "前侧伸展式",
          breakdown: {
            devanagari: "पूर्व + उत्तान + आसन",
            sanskrit: "pūrva + uttāna + āsana",
            meaning: "东方 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "अर्धबद्धपद्म पश्चिमोत्तानासन",
          sanskrit: "ardha baddha padma paścimottānāsana",
          meaning: "半莲花捆绑背部伸展式",
          breakdown: {
            devanagari: "अर्ध + बद्ध + पद्म + पश्चिम + उत्तान + आसन",
            sanskrit: "ardha + baddha + padma + paścima + uttāna + āsana",
            meaning: "一半 + 束缚的 + 莲花 + 西方 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "त्रियङ्गमुखैकपाद पश्चिमोत्तानासन",
          sanskrit: "triyaṅga mukhaikapāda paścimottānāsana",
          meaning: "三肢面朝单腿背部伸式",
          breakdown: {
            devanagari: "त्रि + अङ्ग + मुख + एक + पाद + पश्चिम + उत्तान + आसन",
            sanskrit: "tri + aṅga + mukha + eka + pāda + paścima + uttāna + āsana",
            meaning: "三 + 肢体 + 脸 + 一 + 脚 + 西方 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "जानुशीर्षासन",
          sanskrit: "jānu śīrṣāsana",
          meaning: "头触膝式",
          breakdown: {
            devanagari: "जानु + शीर्ष + आसन",
            sanskrit: "jānu + śīrṣa + āsana",
            meaning: "膝 + 头 + 体式"
          }
        },
        {
          devanagari: "मरीच्यासन",
          sanskrit: "marīcyāsana",
          meaning: "马里奇式",
          breakdown: {
            devanagari: "मरीचि + आसन",
            sanskrit: "marīci + āsana",
            meaning: "马里奇 + 体式"
          }
        },
        {
          devanagari: "नावासन",
          sanskrit: "nāvāsana",
          meaning: "船式",
          breakdown: {
            devanagari: "नाव + आसन",
            sanskrit: "nāva + āsana",
            meaning: "船 + 体式"
          }
        },
        {
          devanagari: "भुजपीडासन",
          sanskrit: "bhuja pīḍāsana",
          meaning: "夹臂式",
          breakdown: {
            devanagari: "भुज + पीड + आसन",
            sanskrit: "bhuja + pīḍa + āsana",
            meaning: "手臂 + 压力 + 体式"
          }
        },
        {
          devanagari: "कूर्मासन",
          sanskrit: "kūrmāsana",
          meaning: "龟式",
          breakdown: {
            devanagari: "कूर्म + आसन",
            sanskrit: "kūrma + āsana",
            meaning: "乌龟 + 体式"
          }
        },
        {
          devanagari: "सुप्त कूर्मासन",
          sanskrit: "supta kūrmāsana",
          meaning: "卧龟式",
          breakdown: {
            devanagari: "सुप्त + कूर्म + आसन",
            sanskrit: "supta + kūrma + āsana",
            meaning: "卧 + 乌龟 + 体式"
          }
        },
        {
          devanagari: "गर्भ पिण्डासन",
          sanskrit: "garbha piṇ्डāsana",
          meaning: "子宫胎儿式",
          breakdown: {
            devanagari: "गर्भ + पिण्ड + आसन",
            sanskrit: "garbha + piṇḍa + āsana",
            meaning: "子宫 + 胎儿 + 体式"
          }
        },
        {
          devanagari: "कुक्कुटासन",
          sanskrit: "kukkuṭāsana",
          meaning: "公鸡式",
          breakdown: {
            devanagari: "कुक्कुट + आसन",
            sanskrit: "kukkuṭa + āsana",
            meaning: "公鸡 + 体式"
          }
        },
        {
          devanagari: "बद्ध कोणासन",
          sanskrit: "baddha koṇāsana",
          meaning: "束角式",
          breakdown: {
            devanagari: "बद्ध + कोण + आसन",
            sanskrit: "baddha + koṇa + āsana",
            meaning: "束缚的 + 角 + 体式"
          }
        },
        {
          devanagari: "उपविष्ट कोणासन",
          sanskrit: "upaviṣṭa koṇāsana",
          meaning: "坐角式",
          breakdown: {
            devanagari: "उपविष्ट + कोण + आसन",
            sanskrit: "upaviṣṭa + koṇa + āsana",
            meaning: "坐着的 + 角 + 体式"
          }
        },
        {
          devanagari: "सुप्त कोणासन",
          sanskrit: "supta koṇāsana",
          meaning: "卧角式",
          breakdown: {
            devanagari: "सुप्त + कोण + आसन",
            sanskrit: "supta + koṇa + āsana",
            meaning: "卧 + 角 + 体式"
          }
        },
        {
          devanagari: "सुप्त पादाङ्गुष्ठासन",
          sanskrit: "supta pādāṅguṣṭhāsana",
          meaning: "躺卧手抓脚趾式",
          breakdown: {
            devanagari: "सुप्त + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "supta + pāda + aṅguṣṭha + āsana",
            meaning: "卧 + 脚 + 脚趾 + 体式"
          }
        },
        {
          devanagari: "उभय पादाङ्गुष्ठासन",
          sanskrit: "ubhaya pādāṅguṣṭhāsana",
          meaning: "双手抓脚趾式",
          breakdown: {
            devanagari: "उभय + पाद + अङ्गुष्ठ + आसन",
            sanskrit: "ubhaya + pāda + aṅguṣṭha + āsana",
            meaning: "两者 + 脚 + 脚趾 + 体式"
          }
        },
        {
          devanagari: "ऊर्ध्वमुख पश्चिमोत्तानासन",
          sanskrit: "ūrdhva mukha paścimottānāsana",
          meaning: "面朝上背部伸展式",
          breakdown: {
            devanagari: "ऊर्ध्व + मुख + पश्चिम + उत्तान + आसन",
            sanskrit: "ūrdhva + mukha + paścima + uttāna + āsana",
            meaning: "向上 + 脸 + 西方 + 强烈伸展 + 体式"
          }
        },
        {
          devanagari: "सेतुबन्धासन",
          sanskrit: "setu bandhāsana",
          meaning: "桥梁式",
          breakdown: {
            devanagari: "सेतु + बन्ध + आसन",
            sanskrit: "setu + bandha + āsana",
            meaning: "桥 + 连接 + 体式"
          }
        },
        {
          devanagari: "पाशासन",
          sanskrit: "pāśāsana",
          meaning: "套索式",
          breakdown: {
            devanagari: "पाश + आसन",
            sanskrit: "pāśa + āsana",
            meaning: "套索 + 体式"
          }
        },
        {
          devanagari: "क्रौञ्चासन",
          sanskrit: "krauñcāsana",
          meaning: "鹳式",
          breakdown: {
            devanagari: "क्रौञ्च + आसन",
            sanskrit: "krauñca + āsana",
            meaning: "鹳 + 体式"
          }
        },
        {
          devanagari: "शलभासन",
          sanskrit: "śalabhāsana",
          meaning: "蝗虫式",
          breakdown: {
            devanagari: "शलभ + आसन",
            sanskrit: "śalabha + āsana",
            meaning: "蝗虫 + 体式"
          }
        },
        {
          devanagari: "भेकासन",
          sanskrit: "bhekāsana",
          meaning: "青蛙式",
          breakdown: {
            devanagari: "भेक + आसन",
            sanskrit: "bheka + āsana",
            meaning: "青蛙 + 体式"
          }
        },
        {
          devanagari: "धनुरासन",
          sanskrit: "dhanurāsana",
          meaning: "弓式",
          breakdown: {
            devanagari: "धनुर + आसन",
            sanskrit: "dhanura + āsana",
            meaning: "弓 + 体式"
          }
        },
        {
          devanagari: "पार्श्व धनुरासन",
          sanskrit: "pārśva dhanurāsana",
          meaning: "侧弓式",
          breakdown: {
            devanagari: "पार्श्व + धनुर + आसन",
            sanskrit: "pārśva + dhanura + āsana",
            meaning: "侧面 + 弓 + 体式"
          }
        },
        {
          devanagari: "उष्ट्रासन",
          sanskrit: "uṣṭrāsana",
          meaning: "骆驼式",
          breakdown: {
            devanagari: "उष्ट्र + आसन",
            sanskrit: "uṣṭra + āsana",
            meaning: "骆驼 + 体式"
          }
        },
        {
          devanagari: "लघु वज्रासन",
          sanskrit: "laghu vajrāsana",
          meaning: "小雷电式",
          breakdown: {
            devanagari: "लघु + वज्र + आसन",
            sanskrit: "laghu + vajra + āsana",
            meaning: "轻的 + 雷电 + 体式"
          }
        },
        {
          devanagari: "कपोतासन",
          sanskrit: "kapotāsana",
          meaning: "鸽式",
          breakdown: {
            devanagari: "कपोत + आसन",
            sanskrit: "kapota + āsana",
            meaning: "鸽子 + 体式"
          }
        },
        {
          devanagari: "सुप्त वज्रासन",
          sanskrit: "supta vajrāsana",
          meaning: "卧雷电式",
          breakdown: {
            devanagari: "सुप्त + वज्र + आसन",
            sanskrit: "supta + vajra + āsana",
            meaning: "卧 + 雷电 + 体式"
          }
        },
        {
          devanagari: "बकासन",
          sanskrit: "bakāsana",
          meaning: "鹤式",
          breakdown: {
            devanagari: "बक + आसन",
            sanskrit: "baka + āsana",
            meaning: "鹤 + 体式"
          }
        },
        {
          devanagari: "भरद्वाजासन",
          sanskrit: "bharadvājāsana",
          meaning: "巴拉德瓦贾式",
          breakdown: {
            devanagari: "भरद्वाज + आसन",
            sanskrit: "bharadvāja + āsana",
            meaning: "巴拉德瓦贾 + 体式"
          }
        },
        {
          devanagari: "अर्ध मत्स्येन्द्रासन",
          sanskrit: "ardha matsyendrāsana",
          meaning: "半鱼王式",
          breakdown: {
            devanagari: "अर्ध + मत्स्येन्द्र + आसन",
            sanskrit: "ardha + matsyendra + āsana",
            meaning: "一半 + 玛茨因德拉 + 体式"
          }
        },
        {
          devanagari: "एक पाद शीर्षासन",
          sanskrit: "eka pāda śīrṣāsana",
          meaning: "单腿绕头式",
          breakdown: {
            devanagari: "एक + पाद + शीर्ष + आसन",
            sanskrit: "eka + pāda + śīrṣa + āsana",
            meaning: "一 + 脚 + 头 + 体式"
          }
        },
        {
          devanagari: "द्वि पाद शीर्षासन",
          sanskrit: "dvi pāda śīrṣāsana",
          meaning: "双腿绕头式",
          breakdown: {
            devanagari: "द्वि + पाद + शीर्ष + आसन",
            sanskrit: "dvi + pāda + śīrṣa + āsana",
            meaning: "二 + 脚 + 头 + 体式"
          }
        },
        {
          devanagari: "योग निद्रासन",
          sanskrit: "yoga nidrāsana",
          meaning: "瑜伽睡眠式",
          breakdown: {
            devanagari: "योग + निद्रा + आसन",
            sanskrit: "yoga + nidrā + āsana",
            meaning: "瑜伽 + 睡眠 + 体式"
          }
        },
        {
          devanagari: "टिट्टिभासन",
          sanskrit: "ṭiṭṭibhāsana",
          meaning: "滨鹬式",
          breakdown: {
            devanagari: "टिट्टिभ + आसन",
            sanskrit: "ṭiṭṭibha + āsana",
            meaning: "滨鹬 + 体式"
          }
        },
        {
          devanagari: "पिञ्छ मयूरासन",
          sanskrit: "piñcha mayūrāsana",
          meaning: "孔雀展翅式",
          breakdown: {
            devanagari: "पिञ्छ + मयूर + आसन",
            sanskrit: "piñcha + mayūra + āsana",
            meaning: "羽毛 + 孔雀 + 体式"
          }
        },
        {
          devanagari: "कारण्डवासन",
          sanskrit: "kāraṇḍavāsana",
          meaning: "鹅式",
          breakdown: {
            devanagari: "कारण्डव + आसन",
            sanskrit: "kāraṇḍava + āsana",
            meaning: "鹅 + 体式"
          }
        },
        {
          devanagari: "मयूरासन",
          sanskrit: "mayūrāsana",
          meaning: "孔雀式",
          breakdown: {
            devanagari: "मयूर + आसन",
            sanskrit: "mayūra + āsana",
            meaning: "孔雀 + 体式"
          }
        },
        {
          devanagari: "नक्रासन",
          sanskrit: "nakrāsana",
          meaning: "鳄鱼式",
          breakdown: {
            devanagari: "नक्र + आसन",
            sanskrit: "nakra + āsana",
            meaning: "鳄鱼 + 体式"
          }
        },
        {
          devanagari: "वातायनासन",
          sanskrit: "vātāyanāsana",
          meaning: "窗式",
          breakdown: {
            devanagari: "वातायन + आसन",
            sanskrit: "vātāyana + āsana",
            meaning: "窗 + 体式"
          }
        },
        {
          devanagari: "परिघासन",
          sanskrit: "parighāsana",
          meaning: "门闩式",
          breakdown: {
            devanagari: "परिघ + आसन",
            sanskrit: "parigha + āsana",
            meaning: "门闩 + 体式"
          }
        },
        {
          devanagari: "गोमुखासन",
          sanskrit: "gomukhāsana",
          meaning: "牛面式",
          breakdown: {
            devanagari: "गो + मुख + आसन",
            sanskrit: "go + mukha + āsana",
            meaning: "牛 + 脸 + 体式"
          }
        },
        {
          devanagari: "सुप्त ऊर्ध्व पाद वज्रासन",
          sanskrit: "supta ūrdhva pāda vajrāsana",
          meaning: "躺卧上抬腿雷电式",
          breakdown: {
            devanagari: "सुप्त + ऊर्ध्व + पाद + वज्र + आसन",
            sanskrit: "supta + ūrdhva + pāda + vajra + āsana",
            meaning: "卧 + 向上 + 脚 + 雷电 + 体式"
          }
        },
        {
          devanagari: "मुक्त हस्त शीर्षासन",
          sanskrit: "mukta hasta śīrṣāsana",
          meaning: "自由手头倒立式",
          breakdown: {
            devanagari: "मुक्त + हस्त + शीर्ष + आसन",
            sanskrit: "mukta + hasta + śīrṣa + āsana",
            meaning: "解脱的 + 手 + 头 + 体式"
          }
        },
        {
          devanagari: "बद्ध हस्त शीर्षासन",
          sanskrit: "baddha hasta śīrṣāsana",
          meaning: "捆绑手头倒立式",
          breakdown: {
            devanagari: "बद्ध + हस्त + शीर्ष + आसन",
            sanskrit: "baddha + hasta + śīrṣa + āsana",
            meaning: "束缚的 + 手 + 头 + 体式"
          }
        },
        {
          devanagari: "ऊर्ध्व धनुरासन",
          sanskrit: "ūrdhva dhanurāsana",
          meaning: "上弓式",
          breakdown: {
            devanagari: "ऊर्ध्व + धनुर + आसन",
            sanskrit: "ūrdhva + dhanura + āsana",
            meaning: "向上 + 弓 + 体式"
          }
        },
        {
          devanagari: "विपरीत चक्रासन",
          sanskrit: "viparīta cakrāsana",
          meaning: "反轮式",
          breakdown: {
            devanagari: "विपरीत + चक्र + आसन",
            sanskrit: "viparīta + cakra + āsana",
            meaning: "反转的 + 轮 + 体式"
          }
        },
        {
          devanagari: "त्रियङ्गमुख उत्तानासन",
          sanskrit: "triyaṅgamukha uttānāsana",
          meaning: "三肢伸展式",
          breakdown: {
            devanagari: "त्रियङ्ग + मुख + उत्तान + आसन",
            sanskrit: "triyaṅga + mukha + uttāna + āsana",
            meaning: "三肢 + 脸 + 伸展 + 体式"
          }
        },
        {
          devanagari: "सालम्ब सर्वाङ्गासन",
          sanskrit: "sālamba sarvāṅgāsana",
          meaning: "支撑肩倒立式",
          breakdown: {
            devanagari: "स + आलम्ब + सर्व + अङ्ग + आसन",
            sanskrit: "sa + ālamba + sarva + aṅga + āsana",
            meaning: "有 + 支撑 + 所有 + 肢体 + 体式"
          }
        },
        {
          devanagari: "हलासन",
          sanskrit: "halāsana",
          meaning: "犁式",
          breakdown: {
            devanagari: "हल + आसन",
            sanskrit: "hala + āsana",
            meaning: "犁 + 体式"
          }
        },
        {
          devanagari: "कर्ण पीडासन",
          sanskrit: "karṇa pīḍāsana",
          meaning: "夹耳式",
          breakdown: {
            devanagari: "कर्ण + पीड + आसन",
            sanskrit: "karṇa + pīḍa + āsana",
            meaning: "耳 + 压力 + 体式"
          }
        },
        {
          devanagari: "ऊर्ध्व पद्मासन",
          sanskrit: "ūrdhva padmāsana",
          meaning: "上莲花式",
          breakdown: {
            devanagari: "ऊर्ध्व + पद्म + आसन",
            sanskrit: "ūrdhva + padma + āsana",
            meaning: "向上 + 莲花 + 体式"
          }
        },
        {
          devanagari: "पिण्डासन",
          sanskrit: "piṇḍāsana",
          meaning: "胎儿式",
          breakdown: {
            devanagari: "पिण्ड + आसन",
            sanskrit: "piṇḍa + āsana",
            meaning: "胎儿 + 体式"
          }
        },
        {
          devanagari: "मत्स्यासन",
          sanskrit: "matsyāsana",
          meaning: "鱼式",
          breakdown: {
            devanagari: "मत्स्य + आसन",
            sanskrit: "matsya + āsana",
            meaning: "鱼 + 体式"
          }
        },
        {
          devanagari: "उत्तान पादासन",
          sanskrit: "uttāna pādāsana",
          meaning: "腿伸展式",
          breakdown: {
            devanagari: "उत्तान + पाद + आसन",
            sanskrit: "uttāna + pāda + āsana",
            meaning: "伸展 + 脚 + 体式"
          }
        },
        {
          devanagari: "शीर्षासन",
          sanskrit: "śīrṣāsana",
          meaning: "头倒立式",
          breakdown: {
            devanagari: "शीर्ष + आसन",
            sanskrit: "śīrṣa + āsana",
            meaning: "头 + 体式"
          }
        },
        {
          devanagari: "बद्ध पद्मासन",
          sanskrit: "baddha padmāsana",
          meaning: "束莲花式",
          breakdown: {
            devanagari: "बद्ध + पद्म + आसन",
            sanskrit: "baddha + padma + āsana",
            meaning: "束缚的 + 莲花 + 体式"
          }
        },
        {
          devanagari: "योग-मुद्रा",
          sanskrit: "yoga-mudrā",
          meaning: "瑜伽印",
          breakdown: {
            devanagari: "योग + मुद्रा",
            sanskrit: "yoga + mudrā",
            meaning: "瑜伽 + 印契"
          }
        },
        {
          devanagari: "पद्मासन",
          sanskrit: "padmāsana",
          meaning: "莲花式",
          breakdown: {
            devanagari: "पद्म + आसन",
            sanskrit: "padma + āsana",
            meaning: "莲花 + 体式"
          }
        },
        {
          devanagari: "उत्प्लुतिः",
          sanskrit: "utplutiḥ",
          meaning: "上提",
          breakdown: {
            devanagari: "उत्प्लुति",
            sanskrit: "utpluti",
            meaning: "跳起"
          }
        },
        {
          devanagari: "सुखासन",
          sanskrit: "sukhāsana",
          meaning: "舒适式",
          breakdown: {
            devanagari: "सुख + आसन",
            sanskrit: "sukha + āsana",
            meaning: "舒适的 + 体式"
          }
        }
      ]
    }
  };

    const asanaContent = asanaData[language as keyof typeof asanaData];

    // 定义标签配置
    const sectionTabs = {
      list: asanaContent.sections.list.title,
      meanings: asanaContent.sections.meanings.title
    };

    return (
      <>
        <Navigation />
        <div className="min-h-screen bg-white pt-12">
          {/* 文章标题部分 */}
          <div className="max-w-6xl mx-auto px-4 pt-4 pb-2 md:pt-6 md:pb-3">
            <h1 className="text-base md:text-lg font-medium text-gray-900 mb-1 tracking-tight">
              {asanaContent.title}
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-1.5">
              {asanaContent.subtitle}
            </p>
            <p className="text-xs md:text-sm text-gray-700 mb-3 leading-snug">
              {asanaContent.intro}
            </p>
          </div>

          {/* SectionTabs 组件 */}
          <SectionTabs
            sections={sectionTabs}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />

          {/* 内容区域 */}
          <div className="max-w-6xl mx-auto px-4 pb-6 md:pb-8">
            {activeSection === 'list' && (
              <div>
                <h2 className="text-sm md:text-base font-medium text-gray-800 mb-1.5">
                  {asanaContent.sections.list.content}
                </h2>
                
                {/* 体式列表 */}
                <div className="space-y-0">
                  {asanaContent.asanas.map((asana, index) => (
                    <div
                      key={index}
                      className="py-1 md:py-1.5 border-b border-gray-100 hover:bg-gray-50/30 transition-colors"
                    >
                      <div className="flex items-center">
                        {/* 左列：天城体 */}
                        <div className="w-1/2 pr-2 md:pr-3">
                          <div className="text-xs md:text-sm font-sans leading-tight tracking-tight">
                            {asana.devanagari}
                          </div>
                        </div>
                        
                        {/* 右列：罗马转写 */}
                        <div className="w-1/2">
                          <div className="text-xs italic text-gray-600 font-mono leading-tight">
                            {asana.sanskrit}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'meanings' && (
              <div className="font-['Futura','Segoe UI',system-ui,sans-serif]">
                <h2 className="text-sm md:text-base font-medium mb-2 md:mb-3 text-gray-800">
                  {asanaContent.sections.meanings.content}
                </h2>
                
                {/* 词源分析 */}
                <div className="space-y-2 md:space-y-3">
                  {asanaContent.meanings.map((item, index) => (
                    <div
                      key={index}
                      className="py-1.5 md:py-2 border-b border-gray-200 last:border-b-0 hover:bg-gray-50/20"
                    >
                      {/* 两列布局 */}
                      <div className="flex flex-col md:flex-row gap-1.5 md:gap-2">
                        {/* 左列：完整形式 */}
                        <div className="w-full md:w-1/2">
                          <div className="text-xs md:text-sm font-sans mb-0.5 leading-tight">
                            {item.devanagari}
                          </div>
                          <div className="text-xs italic text-gray-600 mb-0.5 leading-tight">
                            {item.sanskrit}
                          </div>
                          <div className="text-xs text-gray-700 leading-tight">
                            {item.meaning}
                          </div>
                        </div>
                        
                        {/* 右列：词根分解 */}
                        <div className="w-full md:w-1/2">
                          {item.breakdown && (
                            <div className="pt-0.5 border-t border-gray-100 md:border-t-0 md:pt-0">
                              <div className="text-[11px] md:text-sm font-sans text-gray-500 mb-0.5 leading-tight">
                                {item.breakdown.devanagari}
                              </div>
                              <div className="text-[11px] md:text-sm italic text-gray-500 mb-0.5 leading-tight">
                                {item.breakdown.sanskrit}
                              </div>
                              <div className="text-[11px] md:text-sm text-gray-400 leading-tight">
                                {item.breakdown.meaning}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <Footer />
      </>
    );
}
