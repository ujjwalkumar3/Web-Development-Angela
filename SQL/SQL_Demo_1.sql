select r.resortname , mg.name from resort r join manager mg
on r.managerid = mg.managerid where r.townname = 'JAIPUR'
order by 1;
