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

const TelecomNumberInputType = new GraphQLInputObjectType({
  name: 'TelecomNumberInputType',
  description: 'input type for TelecomNumber',

  fields: () => ({
    areaCode: {type: GraphQLString},
    askForName: {type: GraphQLString},
    contactMechId: {type: GraphQLString},
    contactNumber: {type: GraphQLString},
    countryCode: {type: GraphQLString}
  })
});

export {TelecomNumberInputType};
    