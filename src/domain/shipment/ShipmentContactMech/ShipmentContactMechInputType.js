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

const ShipmentContactMechInputType = new GraphQLInputObjectType({
  name: 'ShipmentContactMechInputType',
  description: 'input type for ShipmentContactMech',

  fields: () => ({
    contactMechId: {type: GraphQLString},
    shipmentContactMechTypeId: {type: GraphQLString},
    shipmentId: {type: GraphQLString}
  })
});

export {ShipmentContactMechInputType};
    