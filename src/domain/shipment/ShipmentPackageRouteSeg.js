
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';

import {ShipmentRouteSegmentType} from '../shipment/ShipmentRouteSegment.js';


const ShipmentPackageRouteSegType = new GraphQLObjectType({
  name: 'ShipmentPackageRouteSegType',
  description: 'Type for ShipmentPackageRouteSeg in shipment',

  fields: () => ({
    labelIntlSignImage: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    shipmentPackageSeqId: {type: GraphQLString},
    trackingCode: {type: GraphQLString},
    boxNumber: {type: GraphQLString},
    packageServiceCost: {type: GraphQLFloat},
    packageOtherCost: {type: GraphQLFloat},
    shipmentRouteSegmentId: {type: GraphQLString},
    labelImage: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    labelPrinted: {type: GraphQLBoolean},
    currencyUomId: {type: GraphQLString},
    internationalInvoice: {type: GraphQLString/*this was a byte Array TODO find a solution*/},
    packageTransportCost: {type: GraphQLFloat},
    shipment: {
      type: ShipmentRouteSegmentType,
      args : {shipmentId: {type: GraphQLString}},
      resolve: (shipmentPackageRouteSeg, args, {loaders}) => loaders.ofbiz.load(`shipment/shipment/shipmentRouteSegments/find?shipmentId=${shipmentPackageRouteSeg.shipmentId}`)
    },
    codAmount: {type: GraphQLFloat},
    insuredAmount: {type: GraphQLFloat},
    labelHtml: {type: GraphQLString}
  })
});

export {ShipmentPackageRouteSegType};
    




const ShipmentPackageRouteSegInputType = new GraphQLInputObjectType({
  name: 'ShipmentPackageRouteSegInputType',
  description: 'input type for ShipmentPackageRouteSeg',

  fields: () => ({
    boxNumber: {type: GraphQLString},
    codAmount: {type: GraphQLFloat},
    currencyUomId: {type: GraphQLString},
    insuredAmount: {type: GraphQLFloat},
    internationalInvoice: {type: new GraphQLList(GraphQLString)},
    labelHtml: {type: GraphQLString},
    labelImage: {type: new GraphQLList(GraphQLString)},
    labelIntlSignImage: {type: new GraphQLList(GraphQLString)},
    labelPrinted: {type: GraphQLBoolean},
    packageOtherCost: {type: GraphQLFloat},
    packageServiceCost: {type: GraphQLFloat},
    packageTransportCost: {type: GraphQLFloat},
    shipmentId: {type: GraphQLString},
    shipmentPackageSeqId: {type: GraphQLString},
    shipmentRouteSegmentId: {type: GraphQLString},
    trackingCode: {type: GraphQLString}
  })
});

export {ShipmentPackageRouteSegInputType};
    