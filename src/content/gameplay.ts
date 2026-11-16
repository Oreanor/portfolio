import type { Project } from "@/types/project";
import type { Locale } from "@/lib/i18n";

type Steps = NonNullable<Project["gameplay"]>;
export const gameplay: Record<Locale, Record<string, Steps>> = {
  en: {
    "star-elite": [
      { title: "Choose a life in space", description: "Create a pilot, launch from a station and take contracts, trade goods, mine asteroids or collect salvage. Earnings pay for repairs, equipment and other ships; exploration is open-ended rather than a single win condition." },
      { title: "Plan the next jump", description: "Use system and galaxy maps, select a destination and open a hyperspace ring. Interstellar travel needs a fitted hyperdrive and fuel. Inertial flight, heat, energy and damage make getting there part of the decision." },
      { title: "Change the scale of the journey", description: "The Mielophone changes the ship’s size and how it moves and collides. Galactic connections and optional NPC contracts turn exploration into a choice of route, resources and relationships." },
    ],
    skladron: [
      { title: "A warehouse is both income and risk", description: "Expand a connected warehouse and place defenses and drone containers. Stored drones can leave in the scheduled shipment for income, or be spent on reconnaissance and raids. More stock is more earning potential, but also more to lose in a fire." },
      { title: "Defend actively", description: "Guns and launchers fire automatically. You shoot incoming drones and use the hose on fires while sprinklers, traps and balloons support the layout. Fire spreads between cells and can destroy containers and installations." },
      { title: "Learn, rebuild, raid", description: "Missions test your own warehouse with repeatable waves; the surviving share determines the score, and keeping any of it opens the next mission. Recon reveals an opponent through fog of war, then raids combine wave patterns and warheads. Replays make the outcome inspectable." },
    ],
    maeth: [
      { title: "Draft your position", description: "Players alternately draw pieces from a shared deck and place four each on free squares of a 4×4 board. Each piece has its own movement directions and range; a coin determines who acts first." },
      { title: "Spend each action once", description: "Each piece can act only once in the whole match. A clean capture succeeds directly; a mutual threat can trigger a coin-resolved duel, and a failed attack still spends the action. Archers shoot from their square and do not enter duels." },
      { title: "Win the exchanges", description: "When neither side has actions left, the player with more captures wins; equal captures draw. Characters can explain the engine’s advice or accept a spoken order, but the game engine still decides whether the move is legal." },
    ],
    "middle-earth": [
      { title: "Carry the Ring to Orodruin", description: "Start with Frodo in Hobbiton and guide the Ring to Mount Doom. You choose the route and recruit companions; keeping the Ring instead of destroying it can lead to a darker ending." },
      { title: "Every detour has a cost", description: "Travel, waiting, searching and foraging advance time. Terrain and transport affect movement, food sustains the party and the bearer accumulates corruption. A detour for help must be weighed against supplies and growing danger." },
      { title: "Protect the party", description: "In battle, focus the party on an enemy or shield a companion. Equipment and character abilities matter, and the Ring’s protection has limits against certain enemies. Survivors gain experience; the journey is recorded in a chronicle." },
    ],
    "two-towers": [
      { title: "Reinforce before acting", description: "Each side starts with a main castle. At the beginning of a turn, the castle, forts and owned territory produce soldiers, which you allocate to the castle or forts." },
      { title: "One choice changes the front", description: "Then take one action: move, occupy a neutral neighbor, attack, build a fort or pass. Territory stays yours even when emptied and continues producing income. An attack needs more soldiers than the target’s defense; forts and castles strengthen that defense." },
      { title: "Capture the main castle", description: "Surviving attackers occupy a captured cell, and a captured fort is destroyed. Taking the opponent’s main castle wins immediately. Play a bot, share the device with another person or watch two bots compete." },
    ],
    "city-rider": [
      { title: "Cruise or pick a job", description: "Choose a real location and drive freely, or approach a mission marker. Races follow checkpoints against rivals; the arena is vehicle combat; deliveries and collecting boxes offer other ways to earn. Special vehicles unlock taxi, bus, rescue, firefighting and towing work." },
      { title: "Build your garage", description: "Spend earnings on cars, fuel and repairs. A dealership changes the available vehicle, while its equipment determines which jobs you can take. Fuel consumption and damage make a trip a resource decision as well as a route." },
      { title: "Make the city your playground", description: "Travel between cities through transport hubs, change time and season or explore with other players on a configured server. There is no single final race: money, garage and progress persist, letting you choose what to do next." },
    ],
  },
  ru: {
    "star-elite": [
      { title: "Выбрать свою жизнь в космосе", description: "Создайте пилота, вылетите со станции и выполняйте контракты, торгуйте, добывайте астероиды или собирайте обломки. Доход идёт на ремонт, оборудование и корабли. Это открытая песочница без единственного условия победы." },
      { title: "Подготовить следующий переход", description: "Выберите цель на системной или галактической карте и откройте кольцо гиперпространства. Нужны установленный гипердвигатель и топливо. Инерция, нагрев, энергия и повреждения делают сам полёт частью решения." },
      { title: "Изменить масштаб путешествия", description: "Миелофон меняет размер корабля, его движение и столкновения. Связи между галактиками и необязательные контракты NPC добавляют выбор маршрута, ресурсов и отношений." },
    ],
    skladron: [
      { title: "Склад — доход и риск", description: "Расширяйте связный склад, размещайте защиту и контейнеры дронов. Дроны могут уйти с очередной отгрузкой и принести доход, а могут отправиться на разведку или в рейд. Больше товара — больше заработок и больше потерь при пожаре." },
      { title: "Защищать самому", description: "Пушки и ракеты стреляют автоматически. Вы сбиваете дронов и тушите огонь брандспойтом, пока спринклеры, ловушки и шары помогают обороне. Пожар переходит на соседние клетки и уничтожает установки и товар." },
      { title: "Учиться, перестраивать, атаковать", description: "В миссиях повторяемые волны проверяют ваш склад; доля уцелевшего определяет счёт, а для открытия следующей миссии достаточно сохранить часть склада. Разведка снимает туман войны, рейды сочетают волны и боеголовки, повторы позволяют разобрать результат." },
    ],
    maeth: [
      { title: "Собрать позицию", description: "Игроки по очереди тянут фигуры из общей колоды и выставляют по четыре на свободные клетки поля 4×4. У фигур свои направления и дальность; монета определяет первый ход." },
      { title: "Потратить действие только один раз", description: "Каждая фигура действует один раз за всю партию. Чистое взятие проходит сразу; взаимная угроза может вызвать дуэль с монетой. Промах тоже тратит действие. Лучники стреляют с места и не участвуют в дуэлях." },
      { title: "Выиграть обмены", description: "Когда ходов не осталось у обеих сторон, выигрывает тот, кто взял больше фигур; равный счёт — ничья. Персонажи объясняют совет движка и принимают словесный приказ, но законность определяет сама игра." },
    ],
    "middle-earth": [
      { title: "Донести Кольцо до Ородруина", description: "Начните с Фродо в Хоббитоне, выберите путь к Роковой горе и набирайте спутников. Если оставить Кольцо себе вместо уничтожения, история может закончиться иначе." },
      { title: "У каждого обхода есть цена", description: "Путь, ожидание, поиск и фуражировка расходуют дни. Рельеф и транспорт влияют на движение, отряду нужна еда, носитель накапливает порчу. Поход за помощью приходится соотносить с запасами и растущей опасностью." },
      { title: "Сберечь отряд", description: "В бою можно сосредоточить атаки на враге или прикрыть спутника. Важны экипировка и способности, а защита Кольца не работает против некоторых врагов. Выжившие получают опыт, события складываются в хронику." },
    ],
    "two-towers": [
      { title: "Сначала подкрепления", description: "Каждая сторона начинает с главного замка. В начале хода замок, форты и занятые клетки приносят солдат, которых распределяют между замком и фортами." },
      { title: "Одно решение меняет фронт", description: "Затем выполняется одно действие: движение, занятие соседней нейтральной клетки, атака, форт или пропуск. Пустая клетка остаётся вашей и приносит доход. Для атаки нужно больше солдат, чем защита цели; форты и замки её усиливают." },
      { title: "Захватить главный замок", description: "Выжившие атакующие занимают клетку, захваченный форт разрушается. Захват главного замка сразу приносит победу. Можно играть с ботом, вдвоём на устройстве или смотреть матч двух ботов." },
    ],
    "city-rider": [
      { title: "Просто ехать или взять работу", description: "Выберите настоящее место и исследуйте его либо подъезжайте к метке задания. В гонке нужно пройти чекпоинты раньше соперников, на арене — победить вооружённые машины. Есть доставки, сбор коробок и работа такси, автобуса, скорой, пожарной и эвакуатора." },
      { title: "Собрать гараж", description: "Заработанное тратится на машины, топливо и ремонт. Автосалон открывает другой транспорт, а его оборудование определяет доступную работу. Расход топлива и повреждения делают поездку ещё и выбором ресурсов." },
      { title: "Найти свой сценарий", description: "Путешествуйте между городами через транспортные узлы, меняйте время и сезон или ездите с другими игроками на настроенном сервере. Единственной финальной гонки нет: деньги, гараж и прогресс сохраняются, а следующую цель выбираете вы." },
    ],
  },
  pt: {
    "star-elite": [
      { title: "Escolher uma vida no espaço", description: "Crie um piloto, saia de uma estação e aceite contratos, negoceie, explore asteroides ou recolha salvados. Os rendimentos pagam reparações, equipamento e naves. A exploração é aberta, sem uma única condição de vitória." },
      { title: "Preparar o próximo salto", description: "Use os mapas, selecione um destino e abra um anel de hiperespaço. Viajar entre estrelas exige propulsor adequado e combustível. Inércia, calor, energia e danos tornam o voo parte da decisão." },
      { title: "Mudar a escala da viagem", description: "O Mielophone altera o tamanho da nave, o movimento e as colisões. Ligações galácticas e contratos opcionais de NPC acrescentam escolhas de percurso, recursos e relações." },
    ],
    skladron: [
      { title: "O armazém é rendimento e risco", description: "Amplie um armazém contínuo e coloque defesas e contentores de drones. O stock pode sair na expedição para gerar rendimento ou ser usado em reconhecimento e ataques. Mais mercadoria rende mais, mas também pode arder." },
      { title: "Defender ativamente", description: "Canhões e lançadores disparam sozinhos. O jogador abate drones e combate incêndios com a mangueira, apoiado por aspersores, armadilhas e balões. O fogo propaga-se entre células e destrói instalações e contentores." },
      { title: "Aprender, reconstruir e atacar", description: "As missões usam vagas repetíveis: a parte sobrevivente define a pontuação e conservar alguma abre a seguinte. O reconhecimento revela o rival sob nevoeiro de guerra; os ataques combinam formações e ogivas. Os replays ajudam a perceber o resultado." },
    ],
    maeth: [
      { title: "Construir a posição", description: "Os jogadores retiram peças de um baralho comum à vez e colocam quatro de cada lado no tabuleiro 4×4. Cada peça tem direções e alcance próprios; uma moeda decide quem joga primeiro." },
      { title: "Gastar cada ação uma só vez", description: "Cada peça pode agir apenas uma vez na partida. Uma captura limpa é direta; uma ameaça mútua pode gerar um duelo por moeda. Falhar também gasta a ação. Os arqueiros disparam da sua casa e não entram em duelos." },
      { title: "Ganhar as trocas", description: "Quando já não há ações, ganha quem capturou mais peças; a igualdade dá empate. As personagens explicam o conselho do motor ou recebem uma ordem verbal, mas é o motor que valida a jogada." },
    ],
    "middle-earth": [
      { title: "Levar o Anel a Orodruin", description: "Comece com Frodo em Hobbiton, escolha a rota para a Montanha da Perdição e recrute companheiros. Ficar com o Anel, em vez de o destruir, pode levar a um final mais sombrio." },
      { title: "Cada desvio tem um custo", description: "Viajar, esperar, procurar e recolher comida fazem avançar os dias. Terreno e transporte afetam o movimento, o grupo precisa de provisões e o portador acumula corrupção. Um desvio para procurar ajuda custa recursos e tempo." },
      { title: "Proteger o grupo", description: "No combate, concentre ataques num inimigo ou proteja um companheiro. Equipamento e capacidades importam; a proteção do Anel tem limites contra certos inimigos. Os sobreviventes ganham experiência e a crónica regista a viagem." },
    ],
    "two-towers": [
      { title: "Reforçar antes de agir", description: "Cada lado começa com um castelo principal. No início do turno, castelo, fortes e território produzem soldados, distribuídos pelo castelo ou pelos fortes." },
      { title: "Uma escolha muda a frente", description: "Depois execute uma ação: mover, ocupar uma casa neutra adjacente, atacar, construir um forte ou passar. O território vazio continua seu e produz rendimento. Atacar exige mais soldados do que a defesa do alvo; fortes e castelos reforçam-na." },
      { title: "Conquistar o castelo principal", description: "Os atacantes sobreviventes ocupam a casa; um forte conquistado é destruído. Tomar o castelo principal vence imediatamente. Jogue contra o bot, partilhe o dispositivo ou observe dois bots." },
    ],
    "city-rider": [
      { title: "Passear ou aceitar trabalho", description: "Escolha um local real e explore, ou aproxime-se de uma missão. Nas corridas siga os pontos de controlo antes dos rivais; na arena enfrente carros armados. Há entregas, caixas e trabalho de táxi, autocarro, ambulância, bombeiros e reboque." },
      { title: "Construir a garagem", description: "Gaste os ganhos em carros, combustível e reparações. O stand abre acesso a outro veículo e o equipamento define os trabalhos possíveis. Consumo e danos tornam cada viagem uma decisão de recursos." },
      { title: "Escolher o seu percurso", description: "Viaje entre cidades por terminais de transporte, mude hora e estação ou conduza com outros jogadores num servidor configurado. Não há uma corrida final única: dinheiro, garagem e progresso persistem, e a próxima meta é sua." },
    ],
  },
};
