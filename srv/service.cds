
using NAUTINAUTICALCV_SRV  from './external/NAUTINAUTICALCV_SRV.cds';
using NAUTIMASTER_BTP_SRV    from './external/NAUTIMASTER_BTP_SRV';

service Nautical{
   entity BidTypeSet as projection on NAUTINAUTICALCV_SRV.BidTypeSet;
   entity CargoUnitSet as projection on NAUTINAUTICALCV_SRV.CargoUnitSet;
   entity CarTypeSet as projection on NAUTINAUTICALCV_SRV.CarTypeSet;
   entity CurTypeSet as projection on NAUTINAUTICALCV_SRV.CurTypeSet;
   entity GtPlanSet as projection on NAUTINAUTICALCV_SRV.GtPlanSet;
   entity GtTabSet as projection on NAUTINAUTICALCV_SRV.GtTabSet;
   entity VoyTypeSet as projection on NAUTINAUTICALCV_SRV.VoyTypeSet;
   entity ZCalculateSet as projection on NAUTINAUTICALCV_SRV.ZCalculateSet;
   entity ZCreatePlanSet as projection on NAUTINAUTICALCV_SRV.ZCreatePlanSet;
   
   entity BidMasterSet as projection on NAUTIMASTER_BTP_SRV.BidMasterSet; 
   entity CostMasterSet as projection on NAUTIMASTER_BTP_SRV.CostMasterSet;
   entity EventMasterSet as projection on NAUTIMASTER_BTP_SRV.EventMasterSet;
   entity BusinessPartnerSet as projection on NAUTIMASTER_BTP_SRV.BusinessPartnerSet;
   entity CountryMasterSet as projection on NAUTIMASTER_BTP_SRV.CountryMasterSet;
   entity MaintainGroupSet as projection on NAUTIMASTER_BTP_SRV.MaintainGroupSet;
   entity ReleaseStrategySet as projection on NAUTIMASTER_BTP_SRV.ReleaseStrategySet;
   entity ClassMasterSet as projection on NAUTIMASTER_BTP_SRV.ClassMasterSet;


entity ZBTP_NAUTICAL_CURRENCY as projection on NAUTIMASTER_BTP_SRV.ZBTP_NAUTICAL_CURRENCY
    {        key waers, isocd, spras, ltext, ktext     }    
;
  entity CountrySet as projection on NAUTIMASTER_BTP_SRV.CountrySet
    {        key Land1, Spras, Landx50     }    
;
entity StandardCurrencySet as projection on NAUTIMASTER_BTP_SRV.StandardCurrencySet
    {        Spras, key Waers, Ltext     }    
;

 entity xNAUTIxVOY as projection on NAUTIMASTER_BTP_SRV.xNAUTIxVOY
    {        key voycd, voydes     }    
;

entity RefrenceDocumentSet as projection on NAUTIMASTER_BTP_SRV.RefrenceDocumentSet
    {        key Docind, Docdesc     }    
;
    
entity xNAUTIxMASBID as projection on NAUTIMASTER_BTP_SRV.xNAUTIxMASBID
    {        key Bname, key Code, Value, Cvalue, Cunit, Datatype, Tablename, Multi_Choice     }    
;

}