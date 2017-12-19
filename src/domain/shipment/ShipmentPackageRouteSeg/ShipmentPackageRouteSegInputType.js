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
    