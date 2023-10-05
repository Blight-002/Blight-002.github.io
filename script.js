if (Cookies.get('AloeVera') == 'Y'){
    AloeVera.className = "Y";}
if (Cookies.get('Arrowleaf') == 'Y'){
    Arrowleaf.className = "Y";}
if (Cookies.get('Chicory') == 'Y'){
    Chicory.className = "Y";}
if (Cookies.get('DevilsClub') == 'Y'){
    DevilsClub.className = "Y";}
if (Cookies.get('Fireweed') == 'Y'){
    Fireweed.className = "Y";}
if (Cookies.get('Horsetail') == 'Y'){
    Horsetail.className = "Y";}
if (Cookies.get('Yarrow') == 'Y'){
    Yarrow.className = "Y";}

if (Cookies.get('Blackberries') == 'Y'){
    Blackberries.className = "Y";}
if (Cookies.get('Blueberries') == 'Y'){
    Blueberries.className = "Y";}
if (Cookies.get('GuaranaBerries') == 'Y'){
    GuaranaBerries.className = "Y";}
if (Cookies.get('Salmonberries') == 'Y'){
    Salmonberries.className = "Y";}
if (Cookies.get('Snowberries') == 'Y'){
    Snowberries.className = "Y";}
if (Cookies.get('Twinberries') == 'Y'){
   Twinberries.className = "Y";}

if (Cookies.get('FlyAmanita') == 'Y'){
    FlyAmanita.className = "Y";}
if (Cookies.get('HydnumRepandum') == 'Y'){
    HydnumRepandum.className = "Y";}
if (Cookies.get('KingOyster') == 'Y'){
    KingOyster.className = "Y";}
if (Cookies.get('Shiitake') == 'Y'){
    Shiitake.className = "Y";}

if (Cookies.get('EnergyMix') == 'Y'){
    EnergyMix.className = "Y";}
if (Cookies.get('EnergyMixP') == 'Y'){
    EnergyMixP.className = "Y";}
if (Cookies.get('HealthMix') == 'Y'){
    HealthMix.className = "Y";}
if (Cookies.get('HealthMixP') == 'Y'){
    HealthMixP.className = "Y";}

if (Cookies.get('BaconBite') == 'Y'){
    BaconBite.className = "Y";}
if (Cookies.get('BrainBite') == 'Y'){
    BrainBite.className = "Y";}
if (Cookies.get('CannedFood') == 'Y'){
    CannedFood.className = "Y";}
if (Cookies.get('CrunchieWunchies') == 'Y'){
    CrunchieWunchies.className = "Y";}
if (Cookies.get('EnergyBar') == 'Y'){
    EnergyBar.className = "Y";}
if (Cookies.get('EnergyDrink') == 'Y'){
    EnergyDrink.className = "Y";}
if (Cookies.get('Meds') == 'Y'){
    Meds.className = "Y";}
if (Cookies.get('MREPack') == 'Y'){
    MREPack.className = "Y";}
if (Cookies.get('RamenNoodles') == 'Y'){
    RamenNoodles.className = "Y";}
if (Cookies.get('SteakBite') == 'Y'){
    SteakBite.className = "Y";}

if (Cookies.get('Fish') == 'Y'){
    Fish.className = "Y";}
if (Cookies.get('HumanArm') == 'Y'){
    HumanArm.className = "Y";}
if (Cookies.get('HumanLeg') == 'Y'){
    HumanLeg.className = "Y";}
if (Cookies.get('meat') == 'Y'){
    meat.className = "Y";}
if (Cookies.get('Oyster') == 'Y'){
    Oyster.className = "Y";}
if (Cookies.get('TurtleEgg') == 'Y'){
    TurtleEgg.className = "Y";}


function ChangeClass(elem)
{
    if (document.getElementById(elem).className == "N")
    {
        document.getElementById(elem).className = "Y"
        Cookies.set(elem, 'Y', {expires: 7});
    }else
    {
        document.getElementById(elem).className = "N";
        Cookies.set(elem, 'N', {expires: 7});
    }
    Cookies.remove(elem)
    Cookies.set(elem, document.getElementById(elem).className, {expires: 30});
}
