namespace RiskManagement;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

entity Risk
{
    key ID : UUID;
    Title : String(100);
    Prio : String(5);
    Descr : String(100);
    Impact : Integer;
    criticality : Integer;
    miti : Association to one Mitigations;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity Mitigations
{
    key ID : UUID;
    CreatedAt : String(100);
    CreatedBy : String(100);
    Description : String(100);
    Owner : String(100);
    Timeline : String(100);
    risk : Association to one Risk;
    risks : Association to many Risk on risks.miti = $self;
}
